# --- Import necessary libraries ---
import os
from openai import OpenAI
from datetime import datetime
import json
from dotenv import load_dotenv


load_dotenv()




# =========================
#   LESSON FLOW FUNCTIONS
# =========================
def teach_lesson(lesson):
    print(f"\n📘 {lesson['title']}")
    for line in lesson['content']:
        print("-", line)
    print("\n👉 Type 'next' to continue")

def show_examples(lesson):
    print("\n💻 Examples:")
    for code in lesson['code_examples']:
        print(code)
    print("\n👉 Type 'next' to get your task")

def give_task(lesson):
    print("\n🧪 Task:")
    for task in lesson['tasks']:
        print("-", task)
    print("\n👉 Type 'done' when you finish")

def give_feedback(lesson):
    print("\n✅ Well done! Type 'next lesson' to continue")

# =========================
#   PROGRESS SYSTEM
# =========================
PROGRESS_FILE = "progress.json"

def load_progress():
    if not os.path.exists(PROGRESS_FILE):
        return {"user_id": "toirat", "progress": {}}
    with open(PROGRESS_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def save_progress(data):
    with open(PROGRESS_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

def get_user_progress(data, skill):
    return data["progress"].get(skill, {
        "current_week": 1,
        "current_topic": "",
        "completed_lessons": [],
        "date_updated": datetime.utcnow().isoformat()
    })

def update_user_progress(data, skill, week, topic, lesson):
    prog = data["progress"].get(skill, {
        "current_week": 1,
        "current_topic": "",
        "completed_lessons": []
    })
    prog["current_week"] = week
    prog["current_topic"] = topic
    if lesson and lesson not in prog["completed_lessons"]:
        prog["completed_lessons"].append(lesson)
    prog["date_updated"] = datetime.utcnow().isoformat()
    data["progress"][skill] = prog
    save_progress(data)

def mark_lesson_complete(skill, lesson_id):
    data = load_progress()
    prog = get_user_progress(data, skill)
    if lesson_id not in prog["completed_lessons"]:
        prog["completed_lessons"].append(lesson_id)
    prog["current_week"] += 1
    prog["current_topic"] = f"Week {prog['current_week']}"
    prog["date_updated"] = datetime.utcnow().isoformat()
    data["progress"][skill] = prog
    save_progress(data)
    return prog

# =========================
#   LOAD JSON FILES
# =========================
def load_json(filename):
    with open(filename, "r", encoding="utf-8") as f:
        return json.load(f)

prompts = load_json("prompts.json")
curriculum = load_json("curriculum.json")

print("Available skills in prompts:", list(prompts.keys()))
print("Available tracks in curriculum:", [t["track_id"] for t in curriculum])

# =========================
#   OPENAI INIT
# =========================
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENAI_API_KEY")
)

# =========================
#   SKILL SELECTION
# =========================
skill = input("What skill do you want to learn?: ").strip().lower()
if skill not in [p.lower() for p in prompts.keys()]:
    print("Sorry, I don't have resources for that skill yet.")
    exit()

prompt = prompts.get(skill, prompts.get("default", {}))

# --- Extract Track ---
track_data = next(
    (track for track in curriculum if track["track_id"].lower() == skill),
    None
)
if not track_data:
    print(f"No curriculum found for {skill}.")
    exit()

# =========================
#   INITIALIZE LESSON STATE
# =========================
# Choose the current week and lesson properly
current_week_index = 0  # or keep track dynamically
current_lesson_index = 0  # or keep track dynamically

current_week = track_data["weeks"][current_week_index]
current_lesson = current_week["lessons"][current_lesson_index]

lesson_state = "teaching"  # 👈 start lesson flow here

# =========================
#   LOAD USER PROGRESS
# =========================
progress_data = load_progress()
user_progress = get_user_progress(progress_data, skill)

# =========================
#   BUILD SYSTEM PROMPT
# =========================
def build_system_prompt():
    return f"""
You are an AI Coach specialized in {skill}.
Follow the roadmap strictly and NEVER invent your own structure.

CURRENT PROGRESS:
{json.dumps(user_progress, indent=2)}

PROMPT (how to behave and teach):
{json.dumps(prompt, indent=2)}

CURRICULUM (for {skill}):
{json.dumps(track_data, indent=2)}

RULES:
1. Continue from CURRENT PROGRESS — do not restart or skip ahead.
2. When the learner says "done" or "next", move to the next lesson or week.
3. If they paste code or say "error", help debug clearly with exact correction.
4. Do not use online links.
5. End every message with a question.
"""

messages = [
    {"role": "system", "content": build_system_prompt()},
    {"role": "user", "content": f"I want to learn {skill}"}
]

# --- First Response ---
coach_response = client.chat.completions.create(
    model="meta-llama/llama-3.3-8b-instruct:free",
    messages=messages
)
print("\nAI Coach says:\n", coach_response.choices[0].message.content)

# =========================
#   CHAT LOOP
# =========================
while True:
    user_input = input("\nYou: ").strip().lower()

    # ===== Lesson Flow Control =====
    if lesson_state == "teaching" and user_input == "next":
        show_examples(current_lesson)
        lesson_state = "task"

    elif lesson_state == "task" and user_input == "done":
        give_feedback(current_lesson)
        lesson_state = "feedback"

    elif lesson_state == "feedback" and user_input == "next lesson":
        current_lesson_index += 1
        if current_lesson_index < len(track_data["lessons"]):
            current_lesson = track_data["lessons"][current_lesson_index]
            teach_lesson(current_lesson)
            lesson_state = "teaching"
        else:
            print("🎉 You've completed all lessons in this skill!")
            break

    # ===== Exit =====
    elif user_input in ["quit", "exit", "bye"]:
        print("AI Coach: Goodbye! Keep learning 🚀")
        break

    # ===== Progress Tracking =====
    if user_input in ["done", "next"]:
        user_progress = mark_lesson_complete(skill, user_progress["current_topic"])
        print(f"✅ Progress saved! Now on {user_progress['current_topic']}")
        messages[0] = {"role": "system", "content": build_system_prompt()}

    # ===== Debug Help =====
    if "error" in user_input:
        print("🤖 AI Coach: Paste the error or code, and I'll help debug step by step.")

    # ===== Chat with AI =====
    messages.append({"role": "user", "content": user_input})
    messages[0] = {"role": "system", "content": build_system_prompt()}

    response = client.chat.completions.create(
        model="meta-llama/llama-3.3-8b-instruct:free",
        messages=messages
    )

    reply = response.choices[0].message.content
    print(f"\nAI Coach says:\n{reply}\n")
