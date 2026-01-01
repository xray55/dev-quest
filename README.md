# DEV//QUEST: Zero to Hero Academy

<div align="center">

![DEV//QUEST Banner](https://img.shields.io/badge/DEV%2F%2FQUEST-Zero%20to%20Hero-00ff88?style=for-the-badge&logo=rocket&logoColor=white)

### 🚀 An AI-Powered Learning Platform That Teaches You to Code From Absolute Zero to Professional Developer

[![Live Demo](https://img.shields.io/badge/🌐_LIVE_DEMO-Click_Here-blue?style=for-the-badge)](https://xray55.github.io/dev-quest/)
[![Lessons](https://img.shields.io/badge/Lessons-574+-purple?style=flat-square)](https://xray55.github.io/dev-quest/)
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

The curriculum takes you from absolute beginner to job-ready developer across **16 phases** and **574+ lessons**:

### 🎯 The Complete Learning Path

```
Phase 00: Digital Foundations (20 lessons)
         └── Computer basics, terminal, dev environment setup
         └── For people who have never coded before
         
Phase 01A: Web Foundations - HTML (15 lessons)
         └── Tags, structure, forms, accessibility
         
Phase 01B: Web Foundations - CSS (25 lessons)
         └── Selectors, box model, Flexbox, Grid, responsive design
         
Phase 02A: JavaScript Basics (27 lessons)
         └── Variables, operators, control flow, functions
         
Phase 02B: JavaScript Data Structures (14 lessons)
         └── Arrays, objects, destructuring, spread operator
         
Phase 02C: JavaScript DOM (15 lessons)
         └── Selecting elements, events, forms, interactivity
         
Phase 02D: JavaScript Advanced (17 lessons)
         └── Scope, closures, async/await, fetch, modules
         
Phase 03: Version Control - Git (24 lessons)
         └── Commits, branches, merging, GitHub, pull requests
         
Phase 04A: CS Fundamentals - Math (8 lessons)
         └── Binary, hexadecimal, boolean logic
         
Phase 04B: Data Structures (24 lessons)
         └── Arrays, linked lists, stacks, queues, trees, graphs
         
Phase 04C: Algorithms (24 lessons)
         └── Searching, sorting, recursion, Big O, dynamic programming
         
Phase 05: TypeScript (15 lessons)
         └── Types, interfaces, generics, utility types
         
Phase 06A: React Fundamentals (10 lessons)
         └── Components, JSX, props, conditional rendering
         
Phase 06B: React State (11 lessons)
         └── useState, useEffect, data fetching
         
Phase 06C: React Advanced Hooks (11 lessons)
         └── useRef, useMemo, useCallback, useReducer, Context
         
Phase 06D: React Ecosystem (10 lessons)
         └── Router, forms, state management, testing
         
Phase 07: Next.js (15 lessons)
         └── App Router, SSR, SSG, API routes, deployment
         
Phase 08A: Node.js Fundamentals (8 lessons)
         └── Event loop, modules, npm, file system
         
Phase 08B: Express.js (10 lessons)
         └── Routing, middleware, REST APIs
         
Phase 08C: Databases - SQL (16 lessons)
         └── Queries, PostgreSQL, Prisma ORM
         
Phase 08D: Authentication (10 lessons)
         └── Sessions, JWT, OAuth, RBAC
         
Phase 09A: Python Fundamentals (15 lessons)
         └── Syntax, data structures, functions
         
Phase 09B: Python Advanced (16 lessons)
         └── Decorators, OOP, async, FastAPI
         
Phase 10A: Linux & Command Line (11 lessons)
         └── File system, permissions, bash scripting
         
Phase 10B: Docker (11 lessons)
         └── Containers, Dockerfile, Compose
         
Phase 10C: CI/CD (8 lessons)
         └── GitHub Actions, automated pipelines
         
Phase 10D: Cloud & Deployment (11 lessons)
         └── AWS basics, PaaS platforms, DNS, SSL
         
Phase 11A: System Design Basics (13 lessons)
         └── Scaling, load balancing, caching
         
Phase 11B: Databases at Scale (6 lessons)
         └── Replication, sharding, CAP theorem
         
Phase 11C: Distributed Systems (11 lessons)
         └── Microservices, message queues, event-driven
         
Phase 12A: AI Fundamentals (7 lessons)
         └── LLMs, prompt engineering, ethics
         
Phase 12B: OpenAI API (8 lessons)
         └── Chat completions, function calling, vision
         
Phase 12C: Local LLMs (5 lessons)
         └── Ollama, model selection, GPU optimization
         
Phase 12D: RAG & Embeddings (10 lessons)
         └── Vector databases, semantic search, LangChain
         
Phase 13A: Security Fundamentals (6 lessons)
         └── CIA triad, cryptography, threat modeling
         
Phase 13B: Web Security - Red Team (12 lessons)
         └── OWASP Top 10, SQL injection, XSS, reconnaissance
         
Phase 13C: Defense - Blue Team (12 lessons)
         └── SOC, SIEM, incident response, forensics
         
Phase 14: Professional Skills (20 lessons)
         └── Clean code, interviews, portfolio, career
         
Phase 15A: Systems Programming - C/C++ (21 lessons)
         └── Pointers, memory management, threads, sockets
         
Phase 15B: Kubernetes (11 lessons)
         └── Pods, deployments, services, Helm
         
Phase 15C: Machine Learning (14 lessons)
         └── Regression, neural networks, PyTorch
         
Phase 15D: Mobile - React Native (9 lessons)
         └── Cross-platform apps, Expo, navigation
         
Phase 16: Continuous Learning (10+ lessons)
         └── WebAssembly, Rust, Go, emerging tech
```

### 📊 Curriculum Stats

| Category | Count |
|----------|-------|
| **Total Lessons** | 574+ |
| **Concept Lessons** | ~350 |
| **Interactive Labs** | ~80 |
| **Coding Challenges** | ~70 |
| **Guided Projects** | ~50 |
| **Capstone Projects** | ~24 |
| **Tracks** | 16 |

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
- **DeepSeek R1 32B** - Primary content writing model
- **Qwen 2.5 Coder 14B** - Research and fast tasks
- **Qwen3 Abliterated 14B** - Creative content generation

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
│  │  Progress   │  │  (Labs/     │  │   Pyodide)  │          │
│  │  574+ items │  │  Challenges)│  │             │          │
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
│  │  │  Agent   │    │  Agent   │    │ (No fake │  │        │
│  │  │ (Qwen14B)│    │(DS-R1 32)│    │  URLs!)  │  │        │
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

---

## 📂 Project Structure

```
dev-quest/
├── index.html          # Frontend SPA
├── daily_ops.py        # Backend + AI engine (574 lesson curriculum)
├── server.py           # Server entry point
├── Dockerfile          # Container configuration
├── docker-compose.yml  # Multi-service orchestration
├── requirements.txt    # Python dependencies
└── README.md           # You are here
```

---

## 🎯 Roadmap

- [x] Core curriculum structure (574+ lessons)
- [x] 5 lesson types (concept, lab, challenge, project, capstone)
- [x] Interactive lab simulations
- [x] In-browser code execution
- [x] AI content generation pipeline
- [x] Fake URL detection and removal
- [x] Real documentation links only
- [x] Multi-model AI support (DeepSeek, Qwen)
- [ ] User authentication and progress saving
- [ ] Peer code review system
- [ ] Community challenges
- [ ] Mobile-responsive design improvements
- [ ] Additional language support (Spanish, etc.)
- [ ] Offline mode / PWA

---

## 🤝 Contributing

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
- **DeepSeek** and **Qwen** teams for amazing open models
- The open-source community for inspiration

---

<div align="center">

### Ready to Start Your Journey?

[![Start Learning](https://img.shields.io/badge/🎮_START_LEARNING-Click_Here-00ff88?style=for-the-badge)](https://xray55.github.io/dev-quest/)

**574+ lessons. Zero to Hero. One lesson at a time.**

---

Made with 💚 by developers, for future developers

*If this project helped you, consider giving it a ⭐*

</div>
