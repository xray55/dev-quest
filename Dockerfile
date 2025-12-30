# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Install system dependencies (git is often needed for CrewAI/LangChain tools)
RUN apt-get update && apt-get install -y \
    git \
    docker.io \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir \
    pydantic==2.10.4 \
    pydantic-core==2.27.2 \
    crewai==0.86.0 \
    langchain-community \
    duckduckgo-search>=6.3.0 \
    litellm \
    langchain-openai \
    fastapi \
    uvicorn \
    -U ddgs

# Copy the ONLY script we need now
COPY daily_ops.py .

# Run the engine
CMD ["python", "daily_ops.py"]