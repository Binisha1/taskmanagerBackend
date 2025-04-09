const { getTasks, createTask, deleteTask } = require("../models/Task");

exports.getUserTasks = async (req, res) => {
  const tasks = await getTasks(req.user.id);
  res.json(tasks);
};

exports.addTask = async (req, res) => {
  const { id, title, description, completed } = req.body;
  await createTask(id, req.user.id, title, description, completed);
  res.status(201).json({
    task: { id, title, description, completed },
    message: "Task created",
  });
};

exports.removeTask = async (req, res) => {
  const taskId = req.params.id;
  await deleteTask(taskId, req.user.id);
  res.json({ message: "Task deleted" });
};
