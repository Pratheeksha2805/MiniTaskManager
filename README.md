# 📝 Mini Task Manager

A full-stack **Task Manager** application built with **Next.js**, **Tailwind CSS**, **Express.js**, and **PostgreSQL**. This app allows users to create, update, toggle, and delete tasks with real-time feedback and a clean, responsive UI.


## 📌 Features

- ✅ Create new tasks
- ✏️ Edit task titles
- 🔁 Toggle between "pending" and "done"
- ❌ Delete tasks
- 📱 Fully responsive UI using Tailwind CSS
- 💾 PostgreSQL database with Express.js API



## 🛠️ Tech Stack

| Layer        | Technology          |
|--------------|---------------------|
| Frontend     | Next.js, Tailwind CSS |
| Backend      | Express.js (Node.js) |
| Database     | PostgreSQL          |
| Styling      | Tailwind CSS        |
| API Format   | REST                |

---


📁 Project Structure
MiniTaskManager/
│
├── mini-task-manager-frontend/      # Frontend built with Next.js & Tailwind CSS
│   ├── pages/                       # All route pages (e.g., index.js)
│   ├── public/                      # Public assets
│   ├── styles/                      # Global styles (if any)
│   ├── tailwind.config.js          # Tailwind configuration
│   ├── postcss.config.js           # PostCSS configuration
│   ├── package.json                # Frontend dependencies and scripts
│   └── ...                         # Other frontend files
│
├── mini-task-manager-backend/       # Backend built with Node.js, Express, PostgreSQL
│   ├── db.js                        # Database connection setup
│   ├── routes/
│   │   └── tasks.js                # All API routes for tasks
│   ├── server.js                   # Main Express server entry point
│   ├── .env                        # Environment variables (excluded from Git)
│   ├── package.json                # Backend dependencies and scripts
│   └── ...                         # Other backend files
│
├── .gitignore                       # Git ignore rules
├── README.md                        # Project documentation
└── LICENSE                          # License file (optional)



# 🚀 HOW TO RUN LOCALLY

---

## ✅ Prerequisites

Make sure the following tools are installed on your system:

- 🟢 **Node.js** & **npm**
- 🛢️ **PostgreSQL** (running)
- 💻 **VS Code** (recommended)

---

## 🔧 BACKEND SETUP (Express.js + PostgreSQL)

### 📁 Create Project Folder

```bash
mkdir mini-task-manager-backend
cd mini-task-manager-backend
npm init -y


Create Files
touch server.js db.js
mkdir routes
cd routes && touch tasks.js && cd ..

Set Up .env
Create a .env file:

PORT=5000
DB_USER=postgres
DB_PASSWORD=your password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tm

Set Up the Database
Open pgAdmin and run:
CREATE DATABASE taskmanager;
Then create the tasks table:
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


Run Backend
node server.js (You should see: Server is running on port 5000)


FRONTEND SETUP (Next.js + Tailwind CSS)

Create Project

npx create-next-app@latest mini-task-manager-frontend
cd mini-task-manager-frontend

Choose:
•	TypeScript: No
•	ESLint: Yes
•	Tailwind CSS: Yes 
•	App Router: No (use Pages Router)
•	src directory: No
Tailwind will be automatically configured.

Run Frontend
npm run dev
Open http://localhost:3000

 Frontend: http://localhost:3000
 Backend: http://localhost:5000
 Database: PostgreSQL


________________________________________


👩‍💻 Author
Pratheeksha R
🗓️ 22/06/2025

 

 

 
 
 

 

