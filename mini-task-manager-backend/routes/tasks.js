const express = require("express");
const router = express.Router();

// Import controller functions
const {
  getAllTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");

// Route definitions
router.get("/", getAllTasks);        // GET /tasks
router.get("/:id", getTask);         // GET /tasks/:id
router.post("/", addTask);           // POST /tasks
router.put("/:id", updateTask);      // PUT /tasks/:id
router.delete("/:id", deleteTask);   // DELETE /tasks/:id

module.exports = router;
