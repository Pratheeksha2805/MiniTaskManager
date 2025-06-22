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

## 📁 Project Structure
MiniTaskManager/
├── mini-task-manager-frontend/                 # Next.js frontend
│   ├── pages/                                                          # Main page (index.js)
│   └── ...                                                                       # Tailwind, config, styles
│
├── mini-task-manager-backend/                 # Node.js backend
│   ├── server.js                                                       # Express server with routes
│   ├── db.js                                                               # PostgreSQL connection
│   ├── routes/tasks.js                                 # Task routes (CRUD logic)
│   ├── .env                                                       # Environment variables
│   └── public/                                                    # Optional for hosting frontend statically
│
└── README.md                                               # Project documentation

HOW TO RUN LOCALLY
✅ Prerequisites:
•	Node.js & npm installed
•	PostgreSQL installed and running
•	VS Code recommended

BACKEND SETUP (Express.js + PostgreSQL)

Create Folder

mkdir mini-task-manager-backend
cd mini-task-manager-backend
npm init -y

Install Dependencies
npm install express pg cors dotenv

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

✅ FEATURES
•	➕ Add tasks
•	📝 Edit task title
•	✅ Toggle between "pending" and "done"
•	❌ Delete task
•	🎨 Tailwind CSS styling
•	🧠 Real-time updates with server
________________________________________
📌 TECHNOLOGIES USED
•	Frontend: Next.js, Tailwind CSS
•	Backend: Node.js, Express.js
•	Database: PostgreSQL
•	Others: Fetch API, RESTful routing
________________________________________

Author:Pratheeksha R
22/06/2025

 

 

 
 
 

 

