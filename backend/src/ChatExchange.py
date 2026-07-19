from pydantic import BaseModel, Field
from typing import List, Literal

# Pydantic Schemas for Chat API
class Message(BaseModel):
    role: Literal["user", "assistant", "system"] = Field(
        ..., description="Role of the message sender."
    )
    content: str = Field(..., description="Text content of the message.")


class ChatRequest(BaseModel):
    messages: List[Message] = Field(
        ..., description="Chronological list of conversation messages."
    )


class ChatResponse(BaseModel):
    role: Literal["assistant"] = "assistant"
    response: str = Field(..., description="Synthesized assistant response text.")
    