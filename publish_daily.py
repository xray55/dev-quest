import sqlite3
import json
import os
import subprocess
import datetime

DB_FILE = "academy.db"
SNAPSHOT_FILE = "snapshot.js"


def generate_snapshot():
    """Reads the SQLite DB and dumps it into a JS file for the frontend."""
    print(f"[{datetime.datetime.now()}] 📸 Generating Snapshot...")

    if not os.path.exists(DB_FILE):
        print(f"❌ ERROR: Database {DB_FILE} not found!")
        return False

    try:
        conn = sqlite3.connect(DB_FILE)
        c = conn.cursor()

        # 1. Fetch Curriculum Tree
        c.execute("""SELECT m.path_name, m.id, m.module_number, m.title, l.id, l.lesson_number, l.title
                     FROM modules m LEFT JOIN lessons l ON m.id = l.module_id
                     ORDER BY m.path_name, m.module_number, l.lesson_number""")
        rows = c.fetchall()

        tree = {}
        for r in rows:
            path, mod_id, mod_num, mod_title, less_id, less_num, less_title = r
            if path not in tree: tree[path] = {}
            if mod_id not in tree[path]: tree[path][mod_id] = {"title": f"M{mod_num}: {mod_title}", "lessons": []}
            if less_id: tree[path][mod_id]["lessons"].append({"id": less_id, "title": less_title})

        # 2. Fetch All Lesson Details
        c.execute("SELECT * FROM lessons")
        lessons_rows = c.fetchall()
        lessons_data = {}

        for r in lessons_rows:
            # Schema: id, mod_id, less_num, title, analogy, starter_code, content, docs, ide_mode
            l_id = r[0]
            lessons_data[l_id] = {
                "title": r[3],
                "analogy": r[4],
                "starter_code": r[5],
                "content": r[6],
                "docs": r[7],
                "ide_mode": r[8]
            }

        conn.close()

        # 3. Write to JS File
        final_data = {
            "tree": tree,
            "lessons": lessons_data
        }

        js_content = f"const SNAPSHOT_DATA = {json.dumps(final_data)};"

        with open(SNAPSHOT_FILE, "w", encoding="utf-8") as f:
            f.write(js_content)

        print("✅ Snapshot saved.")
        return True

    except Exception as e:
        print(f"⚠️ Error generating snapshot: {e}")
        return False


def git_push():
    print(f"[{datetime.datetime.now()}] 🚀 Pushing to GitHub...")
    try:
        # Always PULL first to avoid conflicts
        subprocess.run(["git", "pull", "origin", "main"], check=False)

        # Add changes
        subprocess.run(["git", "add", "."], check=True)

        # Commit
        date_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        subprocess.run(["git", "commit", "-m", f"Daily Curriculum Update: {date_str}"], check=False)

        # Push
        subprocess.run(["git", "push"], check=True)
        print("✅ Successfully pushed to GitHub.")
    except subprocess.CalledProcessError as e:
        print(f"⚠️ Git Error: {e}")


if __name__ == "__main__":
    if generate_snapshot():
        git_push()