const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../mini-task-manager-frontend/out")));

// API Routes
const taskRoutes = require("./routes/tasks");
app.use("/tasks", taskRoutes);

// Catch-all route for frontend (excluding /tasks)
app.get(/^\/(?!tasks).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../mini-task-manager-frontend/out/index.html"));
});

//  Use Render's dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
