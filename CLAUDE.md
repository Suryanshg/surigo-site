# CLAUDE.md / AGENTS.md

This file provides guidance to AI coding assistants (including Claude Code and Antigravity) when working with code in this repository.

## Repository Overview

Personal portfolio site monorepo with two independent workspaces:

- `frontend/` — Vanilla JS + Vite static site, deployed to GitHub Pages at `https://suryanshg.github.io/surigo-site/`
- `backend/` — FastAPI service (Python ≥3.12, managed with `uv`) that will serve an agentic RAG chatbot ("surigobot")

There are no tests or linters configured in either workspace yet.

## Commands

### Frontend (run from `frontend/`)

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # outputs to frontend/dist
npm run preview
```

### Backend (run from `backend/`)

```bash
uv sync                          # install dependencies from uv.lock
uv run fastapi dev main.py       # dev server with reload (fastapi[standard] CLI)
uv run main.py                   # plain uvicorn run, no reload
```

Note: We prefer lightweight dependencies without PyTorch bloat (using Qdrant `fastembed` ONNX runtime for embeddings). If `torch` must ever be added, keep it pinned to the CPU-only index (`pytorch-cpu`) in `pyproject.toml`.

## Architecture

### Frontend: content-driven static site

All page content (fun facts, experience, education, skills, projects) lives as data in `frontend/src/data.js`. `frontend/src/main.js` reads those exports and injects HTML into container elements defined in `index.html`. **Content edits go in `data.js`; rendering/markup changes go in `main.js`; all styling is in the single `src/style.css`.**

Images must be imported as ES modules in `data.js` (not referenced by string path) so Vite rewrites URLs correctly under the `/surigo-site/` base path configured in `vite.config.js`.

### Backend: FastAPI chat API (in progress)

The full production design is in `backend/implementation_plan.md`: a deterministic LangGraph State Graph agent with a 3-tier LLM fallback chain (Groq Llama-3.3-70B -> Groq Llama-3.1-8B -> Gemini 1.5 Flash), vector storage in MongoDB Atlas Vector Search (Free Tier M0), local embeddings via Qdrant `fastembed` (ONNX runtime, no PyTorch bloat), and knowledge base sourced from markdown files in `backend/data/`.

Current state vs. that plan:

- `main.py` (app entry point at root of `backend/`) — FastAPI app with `/health` and `POST /surigobot/chat`; the chat endpoint currently returns a placeholder echo, awaiting LangGraph agent binding
- `src/ChatExchange.py` — Pydantic request/response schemas for the chat API
- `src/agent.py`, `src/ingest.py` — empty stubs awaiting the LangGraph agent and MongoDB Atlas ingestion pipeline

CORS is an explicit allowlist in `main.py` (production GitHub Pages origin + localhost dev ports); add any new frontend origin there.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the frontend and deploys `frontend/dist` to GitHub Pages. Only the frontend is deployed this way; backend deployment is planned for Hugging Face Spaces (Docker Space) using our multi-stage Dockerfile (<200MB image size) with an automated UptimeRobot ping to prevent cold starts.
