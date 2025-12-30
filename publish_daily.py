import sqlite3
import json
import time
import subprocess
import os
from datetime import datetime

# CONFIGURATION
DB_FILE = "academy.db"
EXPORT_FILE = "snapshot.js"
PUSH_INTERVAL = 86400  # 24 Hours in seconds (Change to 60 for testing)


def generate_snapshot():
    print(f"[{datetime.now()}] 📸 Generating Snapshot...")

    if not os.path.exists(DB_FILE):
        print("⚠️ Database not found. Waiting for Docker to create it...")
        return False

    try:
        conn = sqlite3.connect(DB_FILE)
        c = conn.cursor()

        # 1. Get Tree
        c.execute("""
            SELECT m.path_name, m.id, m.module_number, m.title, 
                   l.id, l.lesson_number, l.title
            FROM modules m
            LEFT JOIN lessons l ON m.id = l.module_id
            ORDER BY m.path_name, m.module_number, l.lesson_number
        """)
        tree_rows = c.fetchall()

        tree = {}
        for r in tree_rows:
            path, mod_id, mod_num, mod_title, less_id, less_num, less_title = r
            if path not in tree: tree[path] = {}
            if mod_id not in tree[path]: tree[path][mod_id] = {"title": f"M{mod_num}: {mod_title}", "lessons": []}
            if less_id: tree[path][mod_id]["lessons"].append({"id": less_id, "title": less_title})

        # 2. Get Lessons
        c.execute("SELECT id, title, analogy, starter_code, content_markdown, docs, ide_mode FROM lessons")
        lesson_rows = c.fetchall()
        lessons = {}
        for l in lesson_rows:
            lessons[l[0]] = {
                "title": l[1], "analogy": l[2], "starter_code": l[3],
                "content": l[4], "docs": l[5], "ide_mode": l[6]
            }

        conn.close()

        # 3. Write JS File
        data = {"tree": tree, "lessons": lessons}
        js_content = f"const SNAPSHOT_DATA = {json.dumps(data, indent=2)};"

        with open(EXPORT_FILE, 'w', encoding='utf-8') as f:
            f.write(js_content)

        print("✅ Snapshot saved.")
        return True
    except Exception as e:
        print(f"❌ Error exporting DB: {e}")
        return False


def git_push():
    print(f"[{datetime.now()}] 🚀 Pushing to GitHub...")
    try:
        # 1. Always PULL first to sync with GitHub
        subprocess.run(["git", "pull", "origin", "main"], check=False)

        # 2. Add all changes
        subprocess.run(["git", "add", "."], check=True)

        # 3. Commit with timestamp
        date_str = datetime.now().strftime("%Y-%m-%d %H:%M")
        subprocess.run(["git", "commit", "-m", f"Daily Curriculum Update: {date_str}"], check=True)

        # 4. Push
        subprocess.run(["git", "push"], check=True)
        print("✅ Successfully pushed to GitHub.")
    except subprocess.CalledProcessError as e:
        print(f"⚠️ Git Error (might be nothing to commit): {e}")


if __name__ == "__main__":
    print("🕒 Daily Publisher Job Starting...")
    if generate_snapshot():
        git_push()
    print("✅ Job Done. Exiting.")