import sqlite3
import json
import os
import shutil
import subprocess
import datetime

DB_FILE = "academy.db"
API_DIR = "api"
LESSONS_DIR = os.path.join(API_DIR, "lessons")


def generate_static_api():
    """Splits the DB into tiny JSON files for fast mobile loading."""
    print(f"[{datetime.datetime.now()}] 📂 Generating Static API...")

    if not os.path.exists(DB_FILE):
        print("❌ Database not found.")
        return False

    # 1. Clean and Create Directories
    if os.path.exists(API_DIR):
        try:
            shutil.rmtree(API_DIR)
        except Exception as e:
            print(f"⚠️ Warning: Could not clear API folder: {e}")

    os.makedirs(LESSONS_DIR, exist_ok=True)

    try:
        conn = sqlite3.connect(DB_FILE)
        c = conn.cursor()

        # 2. Generate Curriculum Tree (The Menu)
        c.execute("""SELECT m.path_name, m.id, m.module_number, m.title, l.id, l.lesson_number, l.title
                     FROM modules m LEFT JOIN lessons l ON m.id = l.module_id
                     ORDER BY m.path_name, m.module_number, l.lesson_number""")

        rows = c.fetchall()  # <--- FIXED: Split into two lines for compatibility

        tree = {}
        for r in rows:
            path, mod_id, mod_num, mod_title, less_id, less_num, less_title = r
            if path not in tree: tree[path] = {}
            if mod_id not in tree[path]:
                tree[path][mod_id] = {
                    "title": f"M{mod_num}: {mod_title}",
                    "lessons": []
                }
            if less_id:
                tree[path][mod_id]["lessons"].append({
                    "id": less_id,
                    "title": less_title,
                    "file": f"lessons/{less_id}.json"
                })

        # Save the Menu
        with open(os.path.join(API_DIR, "curriculum.json"), "w", encoding="utf-8") as f:
            json.dump(tree, f)

        # 3. Generate Individual Lesson Files
        c.execute("SELECT * FROM lessons")
        all_lessons = c.fetchall()

        for r in all_lessons:
            lesson_id = r[0]
            lesson_data = {
                "id": lesson_id,
                "title": r[3],
                "analogy": r[4],
                "starter_code": r[5],
                "content": r[6],
                "docs": r[7],
                "ide_mode": r[8]
            }
            # Save individual JSON file
            with open(os.path.join(LESSONS_DIR, f"{lesson_id}.json"), "w", encoding="utf-8") as f:
                json.dump(lesson_data, f)

        print(f"✅ Generated {len(all_lessons)} API endpoints.")
        conn.close()
        return True

    except Exception as e:
        print(f"⚠️ Error: {e}")
        return False


def git_push():
    print("🚀 Pushing to GitHub...")
    try:
        subprocess.run(["git", "pull", "origin", "main"], check=False)
        subprocess.run(["git", "add", "."], check=True)
        date_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        subprocess.run(["git", "commit", "-m", f"Daily API Update {date_str}"], check=False)
        subprocess.run(["git", "push"], check=True)
        print("✅ Done.")
    except Exception as e:
        print(f"Git Error: {e}")


if __name__ == "__main__":
    if generate_static_api():
        git_push()