const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let tasks = [];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// ADD task
app.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.json({ message: "Task added" });
});

// DELETE task
app.delete("/tasks/:index", (req, res) => {
  const index = req.params.index;
  tasks.splice(index, 1);
  res.json({ message: "Task deleted" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});