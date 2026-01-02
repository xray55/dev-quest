# 🛡️ DEV//QUEST: The Architect's Forge

<div align="center">

![DEV//QUEST Status](https://img.shields.io/badge/Status-Production_Ready-00ff88?style=for-the-badge&logo=cpu)
![AI Core](https://img.shields.io/badge/AI_Core-Qwen_2.5_Coder_32B-ff6b35?style=for-the-badge&logo=ollama)
![Infrastructure](https://img.shields.io/badge/Infra-Docker_Native-blue?style=for-the-badge&logo=docker)

### 🚀 A Self-Hostable, AI-Powered Learning Platform
**Autonomous lesson generation powered by local LLMs. Zero cloud dependency.**

[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.11+-blue?style=flat-square&logo=python)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-High_Performance-teal?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com)
[![AutoGen](https://img.shields.io/badge/AutoGen-0.2.27-purple?style=flat-square)](https://github.com/microsoft/autogen)

</div>

---

## 🎯 What Is DEV//QUEST?

**DEV//QUEST** is a fully autonomous educational content generator that runs entirely on your local hardware. It's not a static course platform—it's a **living curriculum engine** that uses AI to write comprehensive programming lessons on demand.

### Key Features

✨ **Autonomous Content Generation** - Uses Microsoft AutoGen to orchestrate AI agents that write detailed lessons  
🏠 **100% Self-Hosted** - Runs on your hardware using Ollama (no cloud APIs, no data sharing)  
📚 **Comprehensive Curriculum** - From foundational programming to advanced systems topics  
🎨 **Modern Learning Interface** - Dark-themed, distraction-free reading experience  
💻 **Interactive Code Editor** - Built-in Python/JavaScript execution with Ace Editor + Pyodide  
📊 **Progress Tracking** - XP system and lesson completion tracking  
🐳 **One-Command Deploy** - Fully containerized with Docker Compose  

---

## 🧠 The AI Architecture

### Multi-Agent System

DEV//QUEST uses **Microsoft AutoGen** to create a multi-agent conversation between:

- **Professor Agent**: Expert content writer generating comprehensive lessons (1500+ words)
- **Admin Agent**: Quality controller ensuring valid JSON output and adherence to standards

### Local LLM Configuration

```yaml
Model: qwen2.5-coder:32b
Engine: Ollama
Endpoint: http://localhost:11434/v1 (OpenAI-compatible)
Context: Internal knowledge synthesis (no web search)
Hardware: Optimized for ~24GB VRAM (single GPU or split across dual GPUs)
```

**Why Qwen 2.5 Coder?**
- Specialized for code generation and technical documentation
- 32B parameters provide deep reasoning capabilities
- Excellent instruction-following for structured JSON output
- Uncensored local deployment (no content filtering)

### How Lesson Generation Works

```
1. User starts platform → Curriculum seeded from roadmap
2. Background engine polls for pending lessons
3. AutoGen Professor writes comprehensive lesson in markdown
4. Content sanitized and stored in SQLite database
5. Frontend fetches and renders markdown with syntax highlighting
```

---

## 🗺️ The Omni-Curriculum

The platform generates lessons across **10 progressive learning tracks**:

| Track | Focus Area | Technologies |
|-------|-----------|-------------|
| **00. Foundations** | Internet basics, networking, computer architecture | DNS, IP, TCP/UDP, CPU/RAM/SSD |
| **01A. HTML** | Web structure and semantics | HTML5, semantic markup, accessibility |
| **01B. CSS** | Styling and layout | CSS3, Flexbox, Grid, animations |
| **02A. JavaScript Basics** | Programming fundamentals | Variables, functions, DOM manipulation |
| **02B. JS Data Structures** | Advanced programming | Arrays, objects, algorithms |
| **02C. JS DOM** | Interactive web development | Event handling, async/await |
| **02D. JS Advanced** | Modern JavaScript | ES6+, modules, promises, fetch API |
| **03. Git** | Version control | Git workflow, branching, collaboration |
| **04A. CS Math** | Computer science fundamentals | Binary, algorithms, Big O notation |
| **04B. Data Structures** | Core CS concepts | Linked lists, trees, graphs, sorting |

### Expandable Curriculum

The roadmap in `curriculum.py` can be extended to include:
- Backend frameworks (Node.js, FastAPI, Django)
- Databases (SQL, NoSQL, ORMs)
- DevOps (Docker, K8s, CI/CD)
- Systems programming (C, C++, Rust)
- Cybersecurity topics
- And much more...

---

## 🛠️ Technical Stack

### Backend

- **FastAPI** - Asynchronous Python web framework for API
- **AutoGen 0.2.27** - Multi-agent orchestration framework
- **Ollama** - Local LLM inference server
- **SQLite** - Embedded database for lessons and progress
- **Python 3.11** - Runtime environment

### Frontend

- **Vanilla JavaScript** - No framework bloat, pure performance
- **Ace Editor** - Professional code editor (Monaco alternative)
- **Pyodide** - Python runtime in the browser (WASM)
- **Marked.js** - Markdown parsing and rendering
- **Custom CSS** - Dark theme optimized for extended reading

### Infrastructure

- **Docker Compose** - Multi-container orchestration
- **Cloudflare Tunnel** - Secure external access (optional)
- **Volume Mounts** - Persistent database storage


## 🎓 Educational Philosophy

Unlike traditional coding bootcamps, DEV//QUEST:

✅ **Teaches fundamentals first** - Deep understanding before frameworks  
✅ **No hand-holding** - Expects active learning and experimentation  
✅ **Comprehensive explanations** - 1500+ word lessons with analogies and examples  
✅ **Official documentation links** - Encourages reading primary sources  
✅ **Practical code examples** - Every lesson includes runnable starter code  
✅ **Progressive difficulty** - Builds knowledge incrementally  



## 📜 License

MIT License - See [LICENSE](LICENSE) for details

---

## 🙏 Acknowledgments

**Powered by:**
- [Microsoft AutoGen](https://github.com/microsoft/autogen) - Multi-agent orchestration
- [Ollama](https://ollama.com/) - Local LLM inference
- [Qwen](https://github.com/QwenLM/Qwen2.5) - Foundation model
- [FastAPI](https://fastapi.tiangolo.com/) - Web framework
- [Ace Editor](https://ace.c9.io/) - Code editor
- [Pyodide](https://pyodide.org/) - Python in the browser

---

## 📊 Project Stats

![Lines of Code](https://img.shields.io/badge/Lines_of_Code-2000+-blue?style=flat-square)
![Lesson Count](https://img.shields.io/badge/Lessons-50+-green?style=flat-square)
![Docker Image Size](https://img.shields.io/badge/Image_Size-~500MB-yellow?style=flat-square)
![Generation Speed](https://img.shields.io/badge/Generation-~2min/lesson-orange?style=flat-square)

---

<div align="center">

**Built with ❤️ for developers who want to learn without limits**


</div>
