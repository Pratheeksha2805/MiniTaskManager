import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await fetch(`${API_URL}/tasks`);
      const data = await res.json();
      const sortedTasks = data.sort((a, b) => (a.status === "done") - (b.status === "done"));
      setTasks(sortedTasks);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (!newTask.trim()) return;

    try {
      await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTask, status: "pending" }),
      });

      setNewTask("");
      fetchTasks();
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  const toggleTaskStatus = async (task) => {
    const updatedTask = {
      ...task,
      status: task.status === "pending" ? "done" : "pending",
    };

    try {
      await fetch(`${API_URL}/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      fetchTasks();
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
      });

      fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  const handleUpdateTask = async (task) => {
    if (!editTitle.trim()) return;

    try {
      await fetch(`${API_URL}/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: editTitle, status: task.status }),
      });

      setEditingId(null);
      setEditTitle("");
      fetchTasks();
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "40px auto", backgroundColor: "#ffe6f0", borderRadius: "8px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px", textAlign: "center" }}>📝 Mini Task Manager</h1>

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Enter task title..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ padding: "8px", width: "60%", marginRight: "10px", fontSize: "16px" }}
        />
        <button onClick={handleAddTask} style={{ padding: "8px 16px", fontSize: "16px" }}>
          Add Task
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px", fontSize: "18px" }}>
            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  style={{ padding: "4px", marginRight: "8px" }}
                />
                <button onClick={() => handleUpdateTask(task)}>Save</button>
                <button onClick={() => setEditingId(null)} style={{ marginLeft: "8px" }}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <strong>{task.title}</strong> —
                <span style={{
                  marginLeft: "8px",
                  color: task.status === "done" ? "green" : "red",
                  fontWeight: "bold",
                }}>
                  {task.status}
                </span>

                <button
                  onClick={() => toggleTaskStatus(task)}
                  style={{
                    marginLeft: "10px",
                    padding: "4px 8px",
                    backgroundColor: "#ddd",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Toggle Status
                </button>

                <button
                  onClick={() => handleDeleteTask(task.id)}
                  style={{
                    marginLeft: "10px",
                    padding: "4px 8px",
                    backgroundColor: "#ff9999",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    setEditingId(task.id);
                    setEditTitle(task.title);
                  }}
                  style={{
                    marginLeft: "10px",
                    padding: "4px 8px",
                    backgroundColor: "#cce5ff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
