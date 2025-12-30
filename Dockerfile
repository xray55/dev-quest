# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Install system dependencies
# (Added curl/wget just in case we need them for healthchecks later)
RUN apt-get update && apt-get install -y \
    git \
    docker.io \
    curl \
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
    flask \
    flask-cors \
    -U ddgs

# Copy EVERYTHING (server.py, academy.db, and any scripts)
COPY . .

# Run the Flask Server instead of daily_ops
CMD ["python", "server.py"]