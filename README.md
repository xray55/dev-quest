# 🛡️ DEV//QUEST: The Architect's Forge

<div align="center">

![DEV//QUEST Status](https://img.shields.io/badge/Status-Active_Development-00ff88?style=for-the-badge&logo=cpu)
![AI Core](https://img.shields.io/badge/AI_Core-DeepSeek_R1_Local-blueviolet?style=for-the-badge&logo=ollama)
![Infrastructure](https://img.shields.io/badge/Infra-Docker_Native-blue?style=for-the-badge&logo=docker)

### 🚀 A Self-Hostable, AI-Powered Curriculum Generator for the Modern Omni-Developer
**From Absolute Zero to System Architect, Bot Developer, and Reverse Engineer.**

[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.11+-blue?style=flat-square&logo=python)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-High_Performance-teal?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com)

</div>

---

## 🤔 What Is This?

**DEV//QUEST** is not just a coding course—it is a **local content generation engine**. 

Unlike static bootcamps, this platform runs on your own hardware using **local Large Language Models (LLMs)**. It utilizes a multi-agent AI system (CrewAI) to autonomously research, synthesize, and write educational modules based on a massive "Omni-Stack" roadmap.

It covers the skills corporate bootcamps won't touch: **Game Reverse Engineering, Bot Automation (Rust/Java), Kernel Manipulation, and Offensive Security**, alongside standard Enterprise Architecture (Spring Boot/.NET).

---

## 🧠 The AI Core (DeepSeek R1)

This system is designed to run **offline** and **uncensored**. It relies on internal expert knowledge synthesis rather than web scraping.

* **Model:** `DeepSeek-R1-Distill-Qwen-32B-abliterated-Q5_K_M`
* **Engine:** [Ollama](https://ollama.com/)
* **Mode:** **Internal Knowledge Only** (No internet search dependency).
* **Hardware:** Optimized for Dual-GPU setups (e.g., RTX 3060 + 5060 Ti) splitting ~23GB VRAM.

---

## 🗺️ The Omni-Curriculum

The engine follows a rigid "Grand Unified Roadmap" covering **10 Levels** of mastery:

| Level | Focus | Tech Stack |
| :--- | :--- | :--- |
| **00** | **The Metal** | CPU Architecture, Registers, Assembly, Kernel Space |
| **01** | **The Interface** | HTML5, CSS3, JavaScript ES6+, DOM Manipulation |
| **02** | **Enterprise** | **Java** (Spring Boot, Kafka), **C#** (.NET Core, Entity Framework) |
| **03** | **Data & AI** | **Python** (PyTorch, Pandas, FastAPI, Scikit-Learn) |
| **04** | **Systems** | **C++** (Pointers, Memory Mgmt, STL), **Assembly** (x86-64) |
| **05** | **Grey Hat** | **Bot Dev** (Rust + Java JNI), **Game Reversing** (Cheat Engine, Ghidra) |
| **06** | **DevOps** | Docker, Kubernetes, Terraform, AWS/Azure |
| **07** | **Standards** | CI/CD, Git Flow, Agile, Clean Code Principles |
| **10** | **Capstones** | "Final Boss" projects for specific Job Roles |

---

## 🛠️ Tech Architecture

* **Containerization:** Fully Dockerized application.
* **Backend API:** FastAPI (Asynchronous Python).
* **Orchestration:** CrewAI (Managing "Architect" and "Writer" agents).
* **Database:** SQLite (Stores generated lessons and curriculum tree).
* **Frontend:** React/Static (Consumes the JSON curriculum).

---
