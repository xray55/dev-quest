import logging
import os
import sqlite3
import time
import re
import random
import sys
from threading import Thread
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from crewai import Agent, Task, Crew, LLM
from langchain_community.tools import DuckDuckGoSearchRun
from crewai.tools import tool

# --- 1. CONFIGURATION ---
logging.basicConfig(level=logging.INFO, format='%(asctime)s | %(levelname)s | %(message)s')
logger = logging.getLogger(__name__)

DB_FILE = "academy.db"
HTML_FILENAME = "index.html"
REST_TIMER = 15  # Optimized speed
MIN_LESSONS_PER_MODULE = 3

# --- CURRICULUM CONFIGURATION ---
CURRICULUM_TRACKS = [
    # 🎨 FRONTEND & JAVASCRIPT MASTERY
    {
        "name": "Frontend & JavaScript Engineering",
        "focus": [
            "JavaScript Basics: Variables, Types, and Loops",
            "DOM Manipulation: QuerySelectors and ClassList",
            "Event Listeners: Bubbling, Capturing, and Delegation",
            "ES6+ Modern Syntax: Arrow Functions, Destructuring, Spread",
            "Closures and Lexical Scope Explained",
            "The 'this' Keyword: Call, Apply, and Bind",
            "Asynchronous JS: Callbacks vs Promises vs Async/Await",
            "Prototypal Inheritance and ES6 Classes",
            "React.js Core: Components, Props, and State",
            "React Hooks: useState, useEffect, and Custom Hooks",
            "State Management: Redux Toolkit vs Zustand",
            "Tailwind CSS: Utility-First Architecture",
            "The Event Loop: Microtasks vs Macrotasks",
            "Browser Storage: LocalStorage, SessionStorage, IndexedDB",
            "Web Workers: Multithreading in the Browser",
            "Critical Rendering Path & Performance Optimization"
        ]
    },

    # ☕ JAVA: From Syntax to Enterprise Architect
    {
        "name": "Java Engineering Faculty",
        "focus": [
            "Java Syntax: Primitives, Loops, and Control Flow",
            "Object-Oriented Programming (OOP): Classes vs Objects",
            "Java Collections Framework (List, Set, Map, Queue)",
            "Multithreading: The volatile keyword & synchronized blocks",
            "Java Memory Model: Heap vs Stack",
            "Reflection API & Annotation Processing",
            "Spring Boot 3: Dependency Injection & IOC",
            "JVM Tuning: Garbage Collection (G1GC vs ZGC)"
        ]
    },

    # 🎮 GAME DEV (C++): From Console to Engine Dev
    {
        "name": "C++ Game Engine Engineering",
        "focus": [
            "C++ Basics: Variables, Functions, and Headers",
            "Pointers vs References: The Critical Difference",
            "The Standard Template Library (STL): Vectors & Maps",
            "RAII: Smart Pointers (unique_ptr, shared_ptr)",
            "Memory Management: Stack Allocation vs Heap Fragmentation",
            "Template Metaprogramming & Concepts",
            "Entity Component Systems (ECS) Architecture",
            "Vulkan/OpenGL Graphics Pipeline Basics"
        ]
    },

    # 🕹️ GAME DEV (C#): From Scripting to Architecture
    {
        "name": "Unity & C# Game Development",
        "focus": [
            "C# Syntax: Variables, Conditionals, Loops",
            "Unity Basics: MonoBehaviours and the Update Loop",
            "C# Delegates, Events, and Actions",
            "Coroutines vs Async/Await in Games",
            "Garbage Collection Optimization in Unity",
            "Asset Bundles & Addressables System",
            "Unity DOTS (Data-Oriented Technology Stack)",
            "Shader Graph & HLSL Shader Programming"
        ]
    },

    # 🦀 RUST: From Hello World to Systems
    {
        "name": "Rust Systems Programming",
        "focus": [
            "Rust Basics: Cargo, Variables, and Mutability",
            "Ownership & Borrowing: The Rules of the Checker",
            "Traits and Generics (The Interface of Rust)",
            "Lifetimes: 'a, 'static, and Elision Rules",
            "Smart Pointers: Box, Rc, Arc, RefCell",
            "Async Rust: Tokio Runtime & Futures",
            "Unsafe Rust: Raw Pointers & FFI",
            "Embedded Rust: Running on Microcontrollers"
        ]
    },

    # ⚔️ RED TEAM: From Scripting to Exploitation (Uncensored)
    {
        "name": "Red Team Operations",
        "focus": [
            "Python/Bash Scripting for Automation",
            "Linux CLI Mastery for Hackers",
            "Reconnaissance: Nmap, Masscan, and OSINT",
            "Web Vulnerabilities: SQLi, XSS, and CSRF",
            "Privilege Escalation: Linux SUID & Windows Tokens",
            "Buffer Overflows: Stack-Based Exploitation",
            "Writing Custom Malware in C/C++",
            "C2 Infrastructure Design"
        ]
    },

    # 🛡️ BLUE TEAM: From Admin to Hunter
    {
        "name": "Blue Team & Cyber Defense",
        "focus": [
            "System Administration: Users, Groups, Permissions",
            "Understanding System Logs (Syslog, Event Viewer)",
            "Network Traffic Analysis (Wireshark/Zeek)",
            "Hardening Servers (CIS Benchmarks)",
            "SIEM Engineering: Splunk/ELK Query Languages",
            "Digital Forensics: Disk Imaging & Artifacts",
            "Threat Hunting: Mapping to MITRE ATT&CK",
            "Writing YARA Rules for Detection"
        ]
    },

    # ⚙️ BACKEND & DISTRIBUTED SYSTEMS
    {
        "name": "Backend & Distributed Systems",
        "focus": [
            "Node.js: Event Loop & Streams",
            "Express.js vs NestJS Architecture",
            "Database Design: SQL (Postgres) vs NoSQL (Mongo)",
            "Redis: Caching Strategies & Pub/Sub",
            "System Design: CAP Theorem & Consistency Models",
            "Microservices: gRPC vs REST vs GraphQL",
            "Docker & Kubernetes Containerization",
            "Infrastructure as Code (Terraform)"
        ]
    }
]

# --- 2. FRONTEND TEMPLATE (WITH SMART API LOGIC) ---
FRONTEND_HTML = r"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DEV//QUEST UNIVERSITY</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/9.1.2/marked.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.32.7/ace.js"></script>
    <script src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js"></script>
    <style>
        :root { --bg-dark: #0d1117; --bg-panel: #161b22; --border: #30363d; --accent: #238636; --text-main: #c9d1d9; --font-code: 'JetBrains Mono', monospace; }
        body { margin: 0; background: var(--bg-dark); color: var(--text-main); font-family: 'Inter', sans-serif; height: 100vh; overflow: hidden; display: flex; }
        #sidebar { width: 320px; background: var(--bg-panel); border-right: 1px solid var(--border); display: flex; flex-direction: column; }
        .brand { padding: 20px; font-weight: 800; color: #fff; border-bottom: 1px solid var(--border); font-size: 1.1rem; cursor:pointer; }
        #track-list { flex: 1; overflow-y: auto; padding: 10px; }
        .path-header { font-size: 0.75rem; font-weight: 800; color: #58a6ff; margin: 20px 0 5px 5px; text-transform: uppercase; letter-spacing: 1px; }
        .module-btn { background: #21262d; color: #c9d1d9; padding: 10px; border-radius: 6px; margin-bottom: 2px; cursor: pointer; font-size: 0.85rem; font-weight: 600; display: flex; justify-content: space-between; align-items: center; }
        .module-btn:hover { background: #30363d; color: #fff; }
        .lesson-list { display: none; padding-left: 10px; margin-bottom: 10px; border-left: 2px solid var(--border); margin-left: 10px; }
        .lesson-list.open { display: block; }
        .lesson-btn { padding: 6px 10px; cursor: pointer; font-size: 0.8rem; color: #8b949e; display: flex; gap: 8px; align-items: center; }
        .lesson-btn:hover { color: #fff; }
        .lesson-btn.active { color: var(--accent); font-weight: 700; }
        #main-area { flex: 1; display: flex; }
        #lesson-pane { flex: 1; overflow-y: auto; border-right: 1px solid var(--border); max-width: 45%; padding: 40px; background: var(--bg-dark); }
        .analogy-card { background: rgba(35, 134, 54, 0.1); border: 1px solid var(--accent); border-radius: 8px; padding: 20px; margin: 25px 0; }
        #ide-pane { flex: 1; display: flex; flex-direction: column; background: #0d1117; min-width: 400px; }
        #toolbar { height: 45px; background: var(--bg-panel); border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; padding: 0 10px; }
        #run-btn { background: var(--accent); color: #fff; border: none; padding: 6px 14px; border-radius: 4px; font-weight: 600; cursor: pointer; }
        #editor { flex: 2; }
        #output-panel { flex: 1; background: #0d1117; border-top: 1px solid var(--border); display: flex; flex-direction: column; max-height: 40%; }
        #output-console { flex: 1; padding: 15px; font-family: var(--font-code); font-size: 0.9rem; color: #fff; overflow: auto; white-space: pre-wrap; }
        #web-preview { width: 100%; height: 100%; background: #fff; border: none; }
        .hidden { display: none !important; }
        .mode-badge { font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; background: #30363d; color: #8b949e; }
        .live-dot { height: 8px; width: 8px; background-color: #238636; border-radius: 50%; display: inline-block; margin-right: 5px; }
        .offline-dot { height: 8px; width: 8px; background-color: #8b949e; border-radius: 50%; display: inline-block; margin-right: 5px; }
    </style>
</head>
<body>
    <aside id="sidebar">
        <div class="brand" onclick="window.location.reload()">
            <i class="fa-solid fa-network-wired"></i> DEV//QUEST
            <div id="connection-status" style="font-size: 0.7rem; font-weight: 400; color: #8b949e; margin-top: 5px;">Checking...</div>
        </div>
        <div id="track-list"></div>
    </aside>
    <div id="main-area">
        <div id="lesson-pane">
            <div id="lesson-content">
                <div style="text-align:center; margin-top:100px; color:#8b949e;">
                    <i class="fa-solid fa-layer-group" style="font-size:3rem; margin-bottom:20px;"></i>
                    <h2>Select a Module</h2>
                    <p>Load knowledge from the Neural Network.</p>
                </div>
            </div>
        </div>
        <div id="ide-pane">
            <div id="toolbar">
                <span id="file-name" style="color:#fff; font-family:var(--font-code); font-size:0.8rem;">code_editor</span>
                <button id="run-btn" onclick="runCode()">EXECUTE</button>
            </div>
            <div id="editor"></div>
            <div id="output-panel"><div id="output-console"></div><iframe id="web-preview" class="hidden"></iframe></div>
        </div>
    </div>
    <script>
        // 1. Determine where to look for data
        // If we are on GitHub, we use the '/api' folder (generated by publish_daily.py)
        // If we are Local, we use the '/curriculum' API directly from Python.
        const IS_GITHUB = window.location.hostname.includes("github.io");
        const BASE_URL = IS_GITHUB ? "https://xray55.github.io/dev-quest/api" : "http://localhost:8000";

        let currentLesson = null;
        let pyodide = null;

        const editor = ace.edit("editor");
        editor.setTheme("ace/theme/one_dark");
        editor.setFontSize(14);
        editor.setShowPrintMargin(false);

        async function init() {
            try { pyodide = await loadPyodide(); } catch(e){ console.log("Pyodide loading..."); }

            if (IS_GITHUB) {
                // CLOUD MODE: Fetch static JSON
                document.getElementById('connection-status').innerHTML = '<span class="offline-dot"></span> CLOUD MODE';
                await loadStaticCurriculum();
            } else {
                // LIVE MODE: Fetch from Python
                await checkLocalConnection();
                setInterval(checkLocalConnection, 15000); // Polling for new lessons
            }
        }

        async function loadStaticCurriculum() {
            try {
                // Fetch the tiny menu file
                const res = await fetch(`${BASE_URL}/curriculum.json`);
                if (!res.ok) throw new Error("Manifest missing");
                const tree = await res.json();
                renderSidebar(tree);
            } catch (e) {
                console.error(e);
                document.getElementById('track-list').innerHTML = "<div style='padding:20px'>Loading curriculum...</div>";
            }
        }

        async function checkLocalConnection() {
            try {
                const res = await fetch(`${BASE_URL}/curriculum`);
                const tree = await res.json();
                document.getElementById('connection-status').innerHTML = '<span class="live-dot"></span> LIVE LOCAL';
                renderSidebar(tree);
            } catch (e) {
                console.warn("Localhost unavailable.");
                document.getElementById('connection-status').innerHTML = '<span style="color:red">OFFLINE</span>';
            }
        }

        function renderSidebar(tree) {
            const container = document.getElementById('track-list');
            if (container.matches(':hover')) return;

            const scrollPos = container.scrollTop;
            container.innerHTML = "";

            if (Object.keys(tree).length === 0) {
                container.innerHTML = "<div style='padding:20px'>No modules generated yet.</div>";
                return;
            }

            for (const [pathName, modules] of Object.entries(tree)) {
                const pathHeader = document.createElement('div');
                pathHeader.className = 'path-header';
                pathHeader.innerText = pathName;
                container.appendChild(pathHeader);
                for (const [modId, modData] of Object.entries(modules)) {
                    const modBtn = document.createElement('div');
                    modBtn.className = 'module-btn';
                    modBtn.innerHTML = `<span>${modData.title}</span> <i class="fa-solid fa-chevron-down" style="font-size:0.7em"></i>`;
                    const lessonList = document.createElement('div');
                    lessonList.className = 'lesson-list';
                    modBtn.onclick = () => {
                        lessonList.classList.toggle('open');
                        const icon = modBtn.querySelector('i');
                        icon.className = lessonList.classList.contains('open') ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
                    };
                    modData.lessons.forEach(l => {
                        const lBtn = document.createElement('div');
                        lBtn.className = 'lesson-btn';
                        lBtn.innerText = l.title;
                        // Determine fetch strategy
                        lBtn.onclick = () => fetchLesson(l.id, lBtn);
                        lessonList.appendChild(lBtn);
                    });
                    container.appendChild(modBtn);
                    container.appendChild(lessonList);
                }
            }
            container.scrollTop = scrollPos;
        }

        async function fetchLesson(id, btnEl) {
            document.querySelectorAll('.lesson-btn').forEach(b => b.classList.remove('active'));
            if(btnEl) btnEl.classList.add('active');
            document.getElementById('lesson-content').innerHTML = `<div style="text-align:center; margin-top:50px;"><i class="fa-solid fa-spinner fa-spin"></i> Fetching...</div>`;

            try {
                let url;
                if (IS_GITHUB) {
                    // Fetch individual JSON file
                    url = `${BASE_URL}/lessons/${id}.json`;
                } else {
                    // Fetch from API
                    url = `${BASE_URL}/lesson/${id}`;
                }

                const res = await fetch(url);
                if (!res.ok) throw new Error("Lesson Not Found");
                const lesson = await res.json();
                currentLesson = lesson;
                renderLesson(lesson);
            } catch(e) { 
                console.error(e);
                document.getElementById('lesson-content').innerText = "Error loading lesson data. Try refreshing."; 
            }
        }

        function renderLesson(l) {
            if (!l) return;
            document.getElementById('lesson-content').innerHTML = `
                <div style="color:var(--accent); font-family:var(--font-code); margin-bottom:10px; font-size:0.8rem;">
                    ${l.ide_mode ? l.ide_mode.toUpperCase() : 'TEXT'} // ${l.title}
                </div>
                <h1>${l.title}</h1>
                <div class="analogy-card">
                    <div style="color:#fff; font-weight:700; margin-bottom:8px; font-size:0.8rem;">CONCEPT ANALOGY</div>
                    ${marked.parse(l.analogy || "")}
                </div>
                <div style="line-height:1.6; font-size:0.95rem;">${marked.parse(l.content || "")}</div>
                <div style="margin-top:40px; padding-top:20px; border-top:1px solid #30363d; font-size:0.9rem;">
                    <strong>DOCS:</strong> ${marked.parse(l.docs||"")}
                </div>
            `;
            let mode = "ace/mode/python";
            if (l.ide_mode === 'javascript') mode = "ace/mode/javascript";
            if (l.ide_mode === 'assembly_x86') mode = "ace/mode/assembly_x86";
            editor.session.setMode(mode);
            editor.setValue(l.starter_code || "", -1);
            document.getElementById('output-console').innerText = "Ready.";
            document.getElementById('output-console').classList.remove('hidden');
            document.getElementById('web-preview').classList.add('hidden');
        }

        async function runCode() {
            const code = editor.getValue();
            const out = document.getElementById('output-console');
            const web = document.getElementById('web-preview');
            const mode = currentLesson ? currentLesson.ide_mode : 'python';
            out.innerText = "Executing...";
            if (mode === 'python' || mode === 'assembly_x86') {
                if(!pyodide) { out.innerText="Loading Python..."; return; }
                try {
                    pyodide.setStdout({ batched: (t) => out.innerText += t + "\n" });
                    out.innerText = "";
                    await pyodide.runPythonAsync(code);
                } catch(e) { out.innerText = e; }
            } else if (mode === 'javascript') {
                try {
                    out.innerText = "";
                    const log = console.log;
                    console.log = (...args) => { out.innerText += args.join(' ') + "\n"; };
                    eval(code);
                    console.log = log; 
                } catch(e) { out.innerText = e; }
            }
        }
        init();
    </script>
</body>
</html>
"""

# --- 3. LLM SETUP ---
llm_standard = LLM(
    model="ollama/qwen2.5-coder:14b",
    base_url=os.getenv("OLLAMA_HOST", "http://localhost:11434"),
    temperature=0.3
)

llm_deep = LLM(
    model="ollama/huihui_ai/deepseek-r1-abliterated:14b",
    base_url=os.getenv("OLLAMA_HOST", "http://localhost:11434"),
    temperature=0.6
)


def get_llm(path_name):
    security_triggers = ["Cybersecurity", "Systems Programming", "Reverse Engineering", "Red Team", "Blue Team"]
    if any(trigger in path_name for trigger in security_triggers):
        return llm_deep
    return llm_standard


# --- 4. TOOL SETUP ---
search_tool = DuckDuckGoSearchRun()


@tool("web_search")
def web_search(query: str):
    """Search the web for accurate documentation links and concepts."""
    return search_tool.run(query)


# --- 5. DATABASE SCHEMA ---
def init_db():
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute("PRAGMA journal_mode=WAL;")  # ⚡ FIX: Enable Write-Ahead Logging for concurrency
    c.execute('''CREATE TABLE IF NOT EXISTS modules (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    path_name TEXT,
                    module_number INTEGER,
                    title TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )''')
    c.execute('''CREATE TABLE IF NOT EXISTS lessons (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    module_id INTEGER,
                    lesson_number INTEGER,
                    title TEXT,
                    analogy TEXT,
                    starter_code TEXT,
                    content_markdown TEXT,
                    docs TEXT,
                    ide_mode TEXT,
                    FOREIGN KEY(module_id) REFERENCES modules(id)
                )''')
    conn.commit()
    conn.close()


# --- 6. HELPERS ---
def ensure_frontend_exists():
    if not os.path.exists(HTML_FILENAME):
        with open(HTML_FILENAME, 'w', encoding='utf-8') as f:
            f.write(FRONTEND_HTML)
        logger.info(f"✅ Created {HTML_FILENAME} automatically.")


def get_active_module(path_name):
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute("SELECT id, module_number, title FROM modules WHERE path_name = ? ORDER BY module_number DESC LIMIT 1",
              (path_name,))
    row = c.fetchone()
    conn.close()
    return row


def get_existing_lesson_titles(module_id):
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute("SELECT title FROM lessons WHERE module_id = ? ORDER BY lesson_number ASC", (module_id,))
    rows = c.fetchall()
    conn.close()
    return [r[0] for r in rows]


def create_new_module(path_name, module_number, title):
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute("INSERT INTO modules (path_name, module_number, title) VALUES (?, ?, ?)",
              (path_name, module_number, title))
    module_id = c.lastrowid
    conn.commit()
    conn.close()
    return module_id


def save_lesson(module_id, lesson_num, data, ide_mode):
    try:
        conn = sqlite3.connect(DB_FILE)
        c = conn.cursor()
        c.execute('''INSERT INTO lessons 
                     (module_id, lesson_number, title, analogy, starter_code, content_markdown, docs, ide_mode)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)''',
                  (module_id, lesson_num, data['title'], data['analogy'],
                   data['starter_code'], data['content_markdown'], data['docs'], ide_mode))
        conn.commit()
        conn.close()
        return True
    except Exception as e:
        logger.error(f"DB Error: {e}")
        return False


# --- 7. INTELLIGENT AGENTS ---
def verify_module_completion(path_name, module_title, existing_titles):
    llm = get_llm(path_name)
    dean = Agent(
        role='Curriculum Director',
        goal=f'Ensure 100% mastery of "{module_title}".',
        backstory="Strict Academic Dean. Checks for missing edge cases/security concepts.",
        llm=llm
    )
    task_desc = f"""
    Review module: '{module_title}' in '{path_name}'.
    Current lessons: {existing_titles}

    DECISION:
    1. Are concepts missing? (e.g. Loops needs 'break/continue').
    2. Is it deep enough?

    OUTPUT:
    - If complete, return: MODULE_COMPLETE
    - If incomplete, return Title of NEXT lesson.
    """
    task = Task(description=task_desc, agent=dean, expected_output="Decision String")
    crew = Crew(agents=[dean], tasks=[task])
    return str(crew.kickoff()).strip().replace('"', '').replace("'", "")


def generate_module_title(path_name, module_num):
    llm = get_llm(path_name)
    planner = Agent(role='Architect', goal=f'Design Module {module_num}.', backstory="Progressive learning.", llm=llm)
    task = Task(description=f"Return ONLY title for Module {module_num} of {path_name}.", agent=planner,
                expected_output="Title")
    crew = Crew(agents=[planner], tasks=[task])
    return str(crew.kickoff()).strip().replace('"', '')


def generate_lesson_content(path_name, module_title, lesson_topic):
    llm = get_llm(path_name)

    expert = Agent(
        role='Instructor',
        goal=f'Teach "{lesson_topic}".',
        backstory="Deep technical expert. You verify facts and links before teaching.",
        llm=llm,
        tools=[web_search]
    )

    formatter = Agent(
        role='Formatter',
        goal='Strict JSON format.',
        backstory="You MUST output the lesson using these exact separators: TITLE::, ANALOGY::, STARTER_CODE::, CONTENT::, DOCS::",
        llm=llm
    )

    t1 = Task(
        description=f"""
        Write Deep-Dive Lesson for '{lesson_topic}' in '{module_title}'. 
        1. **Analogy**: Real world comparison.
        2. **Code**: Runnable simulation code.
        3. **Content**: 3 deep technical bullet points.
        4. **Docs**: Use the 'web_search' tool to find 1-2 REAL, VALID documentation links.
        """,
        agent=expert,
        expected_output="Content with real links"
    )

    t2 = Task(
        description="Format the previous output exactly like this:\nTITLE:: [Lesson Title]\nANALOGY:: [The Analogy]\nSTARTER_CODE:: [The Code]\nCONTENT:: [The Content]\nDOCS:: [Real Links found by search]\n\nDO NOT use Markdown code blocks for the tags.",
        agent=formatter,
        context=[t1],
        expected_output="Formatted"
    )

    crew = Crew(agents=[expert, formatter], tasks=[t1, t2])
    return crew.kickoff()


# --- 8. PARSER ---
def parse_output(raw_text):
    try:
        text = str(raw_text)
        text = re.sub(r'```[a-z]*', '', text).replace('```', '')
        patterns = {
            "title": r'(?:\*\*|##)?\s*TITLE::?\s*(.*?)(?=(?:\*\*|##)?\s*ANALOGY::?|$)',
            "analogy": r'(?:\*\*|##)?\s*ANALOGY::?\s*(.*?)(?=(?:\*\*|##)?\s*STARTER_CODE::?|$)',
            "starter_code": r'(?:\*\*|##)?\s*STARTER_CODE::?\s*(.*?)(?=(?:\*\*|##)?\s*CONTENT::?|$)',
            "content_markdown": r'(?:\*\*|##)?\s*CONTENT::?\s*(.*?)(?=(?:\*\*|##)?\s*DOCS::?|$)',
            "docs": r'(?:\*\*|##)?\s*DOCS::?\s*(.*)'
        }
        results = {}
        for key, pattern in patterns.items():
            match = re.search(pattern, text, re.DOTALL | re.IGNORECASE)
            if match:
                val = match.group(1).strip()
                val = re.sub(r'^\*\*|\*\*$', '', val).strip()
                results[key] = val
            else:
                results[key] = ""

        if not results['title'] or len(results['starter_code']) < 5:
            logger.error(f"DEBUG PARSE FAIL. Raw text start: {text[:200]}")
            return None
        return results
    except Exception as e:
        logger.error(f"Parser Exception: {e}")
        return None


# --- 9. API & LOOP ---
app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])


@app.get("/curriculum")
def get_curriculum():
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute("""SELECT m.path_name, m.id, m.module_number, m.title, l.id, l.lesson_number, l.title
                 FROM modules m LEFT JOIN lessons l ON m.id = l.module_id
                 ORDER BY m.path_name, m.module_number, l.lesson_number""")
    rows = c.fetchall()
    conn.close()
    tree = {}
    for r in rows:
        path, mod_id, mod_num, mod_title, less_id, less_num, less_title = r
        if path not in tree: tree[path] = {}
        if mod_id not in tree[path]: tree[path][mod_id] = {"title": f"M{mod_num}: {mod_title}", "lessons": []}
        if less_id: tree[path][mod_id]["lessons"].append({"id": less_id, "title": less_title})
    return tree


@app.get("/lesson/{id}")
def get_lesson(id: int):
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute("SELECT * FROM lessons WHERE id = ?", (id,))
    row = c.fetchone()
    conn.close()
    if row: return {"title": row[3], "analogy": row[4], "starter_code": row[5], "content": row[6], "docs": row[7],
                    "ide_mode": row[8]}
    return {"error": "Not found"}


def autonomous_loop():
    ensure_frontend_exists()
    logger.info("🚀 Academy Engine Started")

    while True:
        try:
            # 1. Select a Track
            track_data = random.choice(CURRICULUM_TRACKS)
            path = track_data["name"]

            # 2. Select Sub-topic & IDE Mode
            sub_topic = random.choice(track_data["focus"])
            ide_mode = "python"
            if "JavaScript" in path or "Frontend" in path or "Node.js" in sub_topic:
                ide_mode = "javascript"

            # 3. Get/Create Module
            active_mod = get_active_module(path)
            next_topic, module_id, mod_title_str = "", None, ""

            if not active_mod:
                logger.info(f"🆕 Starting First Module for {path}...")
                new_title = generate_module_title(path, 1)
                module_id = create_new_module(path, 1, new_title)
                mod_title_str = new_title
                next_topic = f"Introduction to {new_title} ({sub_topic})"
            else:
                module_id, mod_num, mod_title_str = active_mod[0], active_mod[1], active_mod[2]
                existing = get_existing_lesson_titles(module_id)

                if len(existing) < MIN_LESSONS_PER_MODULE:
                    next_topic = f"Deep Dive: {sub_topic} within {mod_title_str}"
                else:
                    logger.info(f"🧐 Dean Evaluating: '{mod_title_str}'...")
                    verdict = verify_module_completion(path, mod_title_str, existing)
                    if "MODULE_COMPLETE" in verdict:
                        logger.info(f"🎓 Module Complete! Next: Module {mod_num + 1}")
                        new_title = generate_module_title(path, mod_num + 1)
                        module_id = create_new_module(path, mod_num + 1, new_title)
                        mod_title_str = new_title
                        next_topic = f"Introduction to {new_title} ({sub_topic})"
                    else:
                        logger.info(f"🚧 Dean Req: '{verdict}'")
                        next_topic = verdict

            lesson_num = len(get_existing_lesson_titles(module_id)) + 1
            logger.info(f"⚡ Generating: {path} > {mod_title_str} > {next_topic}")

            raw_result = generate_lesson_content(path, mod_title_str, next_topic)
            output_text = str(raw_result.raw) if hasattr(raw_result, 'raw') else str(raw_result)
            data = parse_output(output_text)

            if data:
                success = save_lesson(module_id, lesson_num, data, ide_mode)
                if success:
                    logger.info("✅ Saved.")
                else:
                    logger.error("❌ Save Failed (Check logs for DB Error).")
            else:
                logger.warning("❌ Parse Failed.")

            logger.info(f"💤 Sleeping {REST_TIMER}s...")
            time.sleep(REST_TIMER)
        except Exception as e:
            logger.error(f"Loop Error: {e}")
            time.sleep(10)


if __name__ == "__main__":
    init_db()  # Run DB Init BEFORE server starts
    ensure_frontend_exists()
    Thread(target=lambda: uvicorn.run(app, host="0.0.0.0", port=8000, log_level="error"), daemon=True).start()
    try:
        autonomous_loop()
    except KeyboardInterrupt:
        sys.exit(0)