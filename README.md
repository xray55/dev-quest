# ⚡ DEV//QUEST: Autonomous AI University

> **🔴 LIVE SITE:** [https://xray55.github.io/dev-quest/](https://xray55.github.io/dev-quest/)

**DEV//QUEST** is a fully autonomous, self-expanding coding university. It is run by a fleet of AI agents (CrewAI) living inside a Docker container. 

Unlike static tutorials, this system **researches, writes, and publishes its own curriculum 24/7**. It wakes up every morning, snapshots its database, and pushes new lessons to the public web automatically.

---

## 🎓 The Curriculum (Self-Generating)

The AI Director rotates through five advanced distinct faculties, generating deep-dive modules for each:

### 🎨 Frontend Mastery
* **React.js:** Hooks, Redux, Zustand, Performance Tuning
* **Vue.js:** Composition API, Directives
* **Tailwind CSS:** Utility-First Architecture
* **TypeScript:** Generics, Strict Typing, Interfaces

### ⚙️ Backend Powerhouses
* **Node.js:** Event Loop, Streams, Async Architecture
* **Django (Python):** ORM, Signals, Middleware
* **Spring Boot (Java):** Microservices, Dependency Injection
* **API Design:** GraphQL vs REST, OAuth2, JWT

### 🚀 Systems & Performance
* **Rust:** Ownership, Borrowing, Lifetimes
* **Go (Golang):** Goroutines, Channels, Concurrency
* **C++:** Memory Management, Pointers, STL
* **C#:** .NET Core, LINQ, Async/Await

### 🏢 Enterprise Solutions
* **Java:** JVM Tuning, Garbage Collection
* **Salesforce:** SSJS, Marketing Cloud Scripting
* **Legacy Code:** Refactoring Strategies, Design Patterns
* **Integration:** SOAP, Enterprise Messaging

### 🛡️ Security & DevOps (Black Ops)
* *Powered by Uncensored AI (DeepSeek)*
* **Red Teaming:** Network Scanning, Packet Analysis
* **Malware Analysis:** Reverse Engineering, Assembly x86
* **DevOps:** Docker, Kubernetes, CI/CD Pipelines

---

## 🏗️ Architecture

The system operates on a **"Producer-Publisher"** model:

```mermaid
graph TD
    subgraph Factory ["The Factory (Local Docker)"]
        A[Ollama AI Array] -->|Generates Content| B(Python Agents)
        B -->|Saves to| C[(academy.db)]
    end
    
    subgraph Bridge ["The Bridge (Windows Host)"]
        D[Task Scheduler] -->|Triggers Daily| E[publish_daily.py]
        E -->|Reads DB| C
        E -->|Git Push| F[GitHub Repo]
    end
    
    subgraph Public ["The Public (Web)"]
        F -->|Deploys| G[GitHub Pages]
        G -->|Serves| H[Student Browser]
    end
