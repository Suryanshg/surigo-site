# Backend Implementation Plan: Agentic RAG Portfolio Clone
This document outlines the technical blueprint and staging plan for adding the intelligent backend to the surigo-site monorepo.

## 1. System Architecture
The backend operates as an isolated Python microservice sitting alongside the frontend. It implements a ReAct Agent Architecture via LangGraph. Instead of a hardcoded pipeline, the agent dynamically reasons about the user's query. If the query is irrelevant (e.g., "color of chocolate ice cream"), it natively rejects it to save compute. If it concerns your background, it utilizes a bound tool to query the vector database before synthesizing a response.
```
[User Prompt] 
      │
      ▼
┌──────────────┐
│ ReAct Agent  │ ──(Irrelevant)──► [Direct Rejection Response]
│  (Gemma 4 /  │
│  Gemini 3.1) │ ◄──(Needs Context)──► ┌───────────┐
└──────────────┘                       │ ChromaDB  │
      │                                │   Tool    │
      ▼                                └───────────┘
[Synthesized Response]
```

### Component Stack
- API Framework: FastAPI (Asynchronous Python)
- Orchestration: LangGraph & LangChain (ReAct framework)
- Package Manager: uv (Ultraviolet for lightning-fast Rust-based dependency management)
- Vector Database: ChromaDB (Local, embedded file-based storage)
- Embedding Model: Local Hugging Face Sentence-Transformers (all-MiniLM-L6-v2)
- Inference Compute: Google's latest lightweight endpoints (e.g., Gemma 4 2B/4B via Hugging Face/local, or Gemini 3.1 Flash-Lite via API). This ensures lightning-fast reasoning and classification at minimal/zero cost. 

## 2. Directory Layout (Monorepo Expansion)
The root repository will house the new backend directory, managed entirely by uv:
```
surigo-site/
├── frontend/                 # Existing live Vite code
└── backend/                  # New Python backend workspace
    ├── data/                 # Raw markdown source knowledge base
    │   ├── resume.md         # Master resume
    │   ├── faq.md            # Interview FAQs & behavioral insights
    │   └── projects.md       # Project READMEs & architectural deep dives
    ├── chromadb_store/       # Persistent local vector directory (Git ignored)
    ├── src/
    │   ├── __init__.py
    │   ├── main.py           # FastAPI entry point & CORS configuration
    │   ├── ingest.py         # Offline VectorDB parsing & population script
    │   └── agent.py          # LangGraph ReAct agent compilation
    ├── Dockerfile            # Container definition for multi-cloud deployment
    ├── pyproject.toml        # uv configuration and dependencies
    ├── uv.lock               # Deterministic dependency lockfile
    └── .env                  # Local secrets (API keys)
```
## 3. Implementation Phasing

### Phase 1: Environment & API Skeleton
- Initialize: Create the backend directory and initialize the project using uv init.
- Dependencies: Install dependencies using uv add fastapi uvicorn langchain chromadb sentence-transformers langgraph.
- FastAPI Setup: Build main.py with FastAPI initialization, adding CORSMiddleware configured to explicitly allow incoming traffic from https://suryanshg.github.io.
- Health Check: Expose a /health GET endpoint to verify baseline server functionality.

### Phase 2: Knowledge Ingestion Pipeline (Subject to change)
- Data Structuring: Populate the backend/data/ folder with structural Markdown copies of your resume, custom behavioral FAQs, and technical repository summaries.
- Parsing Script: Develop ingest.py using LangChain's MarkdownTextSplitter to break documents into uniform chunks.
- Embeddings: Instantiate local embeddings using all-MiniLM-L6-v2 to process chunks entirely on CPU.
- Vector DB: Write the chunks to a persistent, embedded instance of ChromaDB inside backend/chromadb_store/.

### Phase 3: ReAct Agent Implementation (LangGraph) (Subject to change)
- Tool Definition: Create a ChromaDB_Search tool in LangChain that wraps your vector store retriever.
- Prompt Engineering: Write a strict system prompt establishing the persona ("You are Suryansh's AI Clone. If a question is unrelated to Suryansh's engineering background, politely decline to answer without using tools...").
- Agent Compilation: Use LangGraph's create_react_agent to bind your lightweight model (Gemma 4 or Gemini 3.1 Flash-Lite) to the ChromaDB_Search tool.

### Phase 4: API Connection & Testing (Subject to change)
- Chat Endpoint: Expose an asynchronous POST route (/api/chat) in main.py that ingests user chat strings, streams them to the ReAct agent, and returns the response.
- Local Testing: Run the server via uv run uvicorn src.main:app and test payloads locally using Postman or cURL to confirm tool-calling behavior and fast rejection.

### Phase 5: Containerization & Cloud Deployment (Subject to change)
- Dockerize: Draft a lightweight Dockerfile utilizing the official ghcr.io/astral-sh/uv base image. Ensure it copies the uv.lock, syncs dependencies without creating a virtual environment overhead, and serves the application.
- Deploy: Deploy the container to a free-tier hosting platform suited for containerized ML pipelines (such as Hugging Face Spaces or Koyeb) to obtain a public HTTPS backend URL.
- Connect Frontend: Update the frontend main.js script to target the live production endpoint.