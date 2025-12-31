# DEV//QUEST: Zero to Hero Academy

<div align="center">

![DEV//QUEST Banner](https://img.shields.io/badge/DEV%2F%2FQUEST-Zero%20to%20Hero-00ff88?style=for-the-badge&logo=rocket&logoColor=white)

### 🚀 An AI-Powered Learning Platform That Teaches You to Code From Absolute Zero to Professional Developer

[![Live Demo](https://img.shields.io/badge/🌐_LIVE_DEMO-Click_Here-blue?style=for-the-badge)](https://xray55.github.io/dev-quest/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.11+-blue?style=flat-square&logo=python)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-teal?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com)

**[🎮 Try It Now](https://xray55.github.io/dev-quest/)** | **[📖 Curriculum](#-curriculum-overview)** | **[🛠 Tech Stack](#-tech-stack)** | **[🤝 Contributing](#-contributing)**

</div>

---

## 🤔 What Is This?

**DEV//QUEST** is a free, self-paced coding academy that takes you from "I've never used a computer" to "I can build production applications." 

Unlike traditional courses, this platform uses **AI agents to generate lessons in real-time**, meaning the content is always evolving and improving. You learn by doing—every lesson includes interactive labs, coding challenges, and guided projects.

### 👶 New to Coding? Start Here.

Think of DEV//QUEST like a video game for learning programming:

- **Levels** = Tracks (Web Basics → JavaScript → React → Backend → etc.)
- **Missions** = Lessons (concepts you need to understand)
- **Mini-games** = Interactive Labs (play with code visually)
- **Boss Battles** = Challenges (problems you solve with code)
- **Quests** = Projects (build real things step-by-step)
- **Final Boss** = Capstone (prove you've mastered the track)

You don't need to know anything about computers to start. Level 00 teaches you what a CPU is, how to use a keyboard efficiently, and how to navigate the command line.

### 👨‍💻 For Developers: The Technical Pitch

DEV//QUEST is a **full-stack learning management system** with an AI content generation pipeline:

- **Frontend**: Vanilla JS SPA with Ace Editor and Pyodide (Python in browser)
- **Backend**: FastAPI with SQLite, running CrewAI agents
- **AI Engine**: Multi-agent system using local LLMs (Ollama) to research and generate curriculum content
- **Content Types**: 5 distinct lesson types with specialized rendering and interactivity

The AI continuously generates new lessons following a predefined curriculum roadmap, with each lesson including theory, analogies, code examples, interactive simulations, and assessment criteria.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 **AI-Generated Content** | Lessons are created by AI agents that research topics and write educational content |
| 🧪 **Interactive Labs** | Visual simulations for logic gates, memory allocation, terminal commands, and more |
| ⚡ **Coding Challenges** | Problems with automated test cases and progressive hints |
| 🔨 **Guided Projects** | Multi-step projects that build real applications |
| 🏆 **Capstone Projects** | Portfolio-ready projects at the end of each track |
| 💻 **In-Browser IDE** | Write and run Python/JavaScript code without installing anything |
| 📊 **Progress Tracking** | See your advancement through the curriculum |
| 🌙 **Dark Mode UI** | Easy on the eyes for those long coding sessions |

---

## 📚 Curriculum Overview

The curriculum takes you from absolute beginner to job-ready developer across **10 levels** and **180+ lessons**:

```
Level 00: Digital Foundations (Pre-Code)
         └── Computer basics, terminal, dev environment setup
         
Level 01A: Web Foundations (HTML/CSS)
         └── Build and style web pages
         
Level 01B: Programming Logic (JavaScript)
         └── Variables, loops, functions, DOM manipulation
         
Level 01C: Version Control (Git & GitHub)
         └── Collaboration and code management
         
Level 02: CS Fundamentals
         └── Data structures, algorithms, Big O notation
         
Level 03A: Modern Frontend (React + TypeScript)
         └── Build interactive web applications
         
Level 03B: Backend Development (Node.js)
         └── APIs, databases, authentication
         
Level 03C: Python Essentials
         └── Scripting, automation, FastAPI
         
Level 04: DevOps & Cloud
         └── Docker, CI/CD, AWS basics, deployment
         
Level 05: Systems Programming (C/C++) [Optional]
         └── Memory management, networking, low-level concepts
         
Level 06A: AI for Developers
         └── LLMs, RAG, prompt engineering, building AI features
         
Level 06B: Professional Skills
         └── Code review, interviews, portfolio building
         
Level 07: Architecture & System Design
         └── Scalability, microservices, distributed systems
         
Level 08A: Security (Red Team)
         └── Penetration testing, vulnerability assessment
         
Level 08B: Security (Blue Team)
         └── Defense, incident response, forensics
         
Level 09+: Specializations
         └── Mobile, Data Engineering, ML Engineering
```

### 📖 Lesson Types

Each lesson is one of five types:

| Type | Icon | Purpose |
|------|------|---------|
| **Concept** | 📘 | Theory with real-world analogies and code examples |
| **Lab** | 🧪 | Interactive simulations you can play with |
| **Challenge** | ⚡ | Coding problems with tests to pass |
| **Project** | 🔨 | Step-by-step guided builds |
| **Capstone** | 🏆 | End-of-track comprehensive projects |

---

## 🛠 Tech Stack

### Frontend
- **HTML/CSS/JavaScript** - No framework, vanilla for simplicity
- **Ace Editor** - Professional code editing with syntax highlighting
- **Pyodide** - Python interpreter compiled to WebAssembly
- **Marked.js** - Markdown rendering for lesson content
- **Font Awesome** - Icons

### Backend
- **FastAPI** - High-performance Python API framework
- **SQLite** - Lightweight database for lessons and progress
- **CrewAI** - Multi-agent orchestration framework
- **LangChain** - LLM tooling and web search integration

### AI/LLM
- **Ollama** - Local LLM inference server
- **Qwen 2.5 Coder 14B** - Research agent model
- **DeepSeek R1 32B** - Content writing agent model

### Infrastructure
- **Docker** - Containerized deployment
- **GitHub Pages** - Frontend hosting
- **Cloudflare** - SSL and CDN (optional)

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │   Sidebar   │  │   Lesson    │  │     IDE     │          │
│  │  (Tracks)   │  │   Viewer    │  │   (Ace +    │          │
│  │             │  │  (Labs/     │  │   Pyodide)  │          │
│  │             │  │  Challenges)│  │             │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
└────────────────────────────┬────────────────────────────────┘
                             │ HTTP/REST
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                     FASTAPI BACKEND                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │  /curriculum│  │  /lesson/   │  │  /ai-status │          │
│  │  endpoint   │  │  {id}       │  │  endpoint   │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
│                           │                                  │
│  ┌────────────────────────┴────────────────────────┐        │
│  │              AUTONOMOUS AI LOOP                  │        │
│  │  ┌──────────┐    ┌──────────┐    ┌──────────┐  │        │
│  │  │ Research │ →  │  Writer  │ →  │  Parser  │  │        │
│  │  │  Agent   │    │  Agent   │    │          │  │        │
│  │  └──────────┘    └──────────┘    └──────────┘  │        │
│  └──────────────────────────────────────────────────┘        │
└────────────────────────────┬────────────────────────────────┘
                             │
              ┌──────────────┴──────────────┐
              ▼                              ▼
       ┌─────────────┐              ┌─────────────┐
       │   SQLite    │              │   Ollama    │
       │  Database   │              │  (Local LLM)│
       └─────────────┘              └─────────────┘
```

---

## 🚀 Getting Started

### Option 1: Just Use It (Recommended for Learners)

👉 **[Click here to start learning](https://xray55.github.io/dev-quest/)**

No installation required. Open the link and begin your journey.

## 📂 Project Structure

```
dev-quest/
├── index.html          # Frontend SPA
├── daily_ops.py        # Backend + AI engine
├── server.py           # Server entry point
├── Dockerfile          # Container configuration
├── docker-compose.yml  # Multi-service orchestration
├── requirements.txt    # Python dependencies
└── README.md           # You are here
```

---

## 🎯 Roadmap

- [x] Core curriculum structure (180+ lessons)
- [x] 5 lesson types (concept, lab, challenge, project, capstone)
- [x] Interactive lab simulations
- [x] In-browser code execution
- [x] AI content generation pipeline
- [ ] User authentication and progress saving
- [ ] Peer code review system
- [ ] Community challenges
- [ ] Mobile-responsive design improvements
- [ ] Additional language support (Spanish, etc.)
- [ ] Offline mode / PWA

---

### Priority Areas
- New interactive lab simulations
- Additional challenge test cases
- Frontend accessibility improvements
- Documentation and tutorials

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **CrewAI** for the multi-agent framework
- **Ollama** for making local LLMs accessible
- **Pyodide** for Python in the browser
- **Ace Editor** for the code editing experience
- The open-source community for inspiration

---

<div align="center">

### Ready to Start Your Journey?

[![Start Learning](https://img.shields.io/badge/🎮_START_LEARNING-Click_Here-00ff88?style=for-the-badge)](https://xray55.github.io/dev-quest/)

**From Zero to Hero. One lesson at a time.**

---

Made with 💚 by developers, for future developers

*If this project helped you, consider giving it a ⭐*

</div>
