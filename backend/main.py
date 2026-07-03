from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from src.ChatExchange import ChatRequest, ChatResponse
import uvicorn

# Initialize FastAPI application
app = FastAPI(
    title="Surigo Site Backend API",
    description="Agentic RAG Based Chat API",
    version="0.1.0",
)

# Configure CORS middleware explicitly allowing production and local dev origins
origins = [
    "https://suryanshg.github.io",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Health Check Endpoint
@app.get("/health", summary="Health Check")
async def health_check():
    """Verify baseline server functionality."""
    return {"status": "ok"}


@app.post("/surigobot/chat", response_model=ChatResponse, summary="Chat Endpoint")
async def chat_endpoint(request: ChatRequest):
    """
    Ingests chat conversation messages and returns the assistant response.
    Currently implements a minimal placeholder response before LangGraph ReAct agent binding.
    """
    if not request.messages:
        raise HTTPException(status_code=400, detail="Message list cannot be empty.")

    # Find the latest user message
    last_user_msg = next(
        (msg.content for msg in reversed(request.messages) if msg.role == "user"),
        None
    )

    if not last_user_msg:
        raise HTTPException(status_code=400, detail="No user message provided.")

    # Minimal placeholder response
    placeholder_response = (
        f"Echo from minimal chat API: Received query '{last_user_msg}'."
    )

    return ChatResponse(response=placeholder_response)


if __name__ == "__main__":
    uvicorn.run(app, reload=False)