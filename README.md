# DEV//QUEST: The Autonomous AI University

![Project Status](https://img.shields.io/badge/Status-Live-success)
![AI Model](https://img.shields.io/badge/Model-DeepSeek_32B-blue)
![Architecture](https://img.shields.io/badge/Architecture-Docker_Microservices-orange)

**DEV//QUEST** is a self-generating coding academy that runs entirely on local hardware. It uses a swarm of AI agents to design a curriculum, write technical lessons, and publish them to a live web interface in real-time.

[![Launch Academy](https://img.shields.io/badge/🚀_Launch-Dev%2F%2FQuest_Academy-2ea44f?style=for-the-badge)](https://xray55.github.io/dev-quest/)

## 🚀 How It Works

The system operates as an autonomous loop inside a Docker container:

1.  **The Architect:** Consults the `CURRICULUM_ROADMAP` to decide the next topic (e.g., "Logic Gates" after "Variables").
2.  **The Researcher (Qwen-14B):** Scans internal knowledge bases to gather technical facts and analogies.
3.  **The Professor (DeepSeek-32B):** Synthesizes the research into a structured JSON lesson with analogies, code examples, and documentation.
4.  **The Publisher:** Sanitizes the output and commits it to the SQLite database.
5.  **The Frontend:** A reactive HTML/JS interface fetches the new lesson and updates the live website instantly.

## 🛠️ Tech Stack

* **Core Logic:** Python 3.11 (FastAPI, CrewAI, LangChain)
* **AI Backend:** Ollama (Local LLM Server)
    * *Writing Model:* `huihui_ai/deepseek-r1-abliterated:32b`
    * *Planning Model:* `qwen2.5-coder:14b`
* **Database:** SQLite (Relational mapping of Tracks -> Modules -> Lessons)
* **Frontend:** Vanilla JS + Ace Editor + Pyodide (WASM Python Runtime)
* **Infrastructure:** Docker Compose + Cloudflare Tunnel

## 📂 Project Structure

```text
/
├── academy_tunnel/       # Cloudflare Tunnel Configuration
├── daily_ops.py          # The "Brain" (AI Agents & API Server)
├── index.html            # The "Face" (ADHD-Friendly Learning UI)
├── server.py             # FastAPI Entry Point
├── Dockerfile            # Container Definition
├── docker-compose.yml    # Orchestration
└── requirements.txt      # Python Dependencies
