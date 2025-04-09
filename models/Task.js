const db = require("../config/db");

const getTasks = async (userId) => {
  const [rows] = await db.query("SELECT * FROM tasks WHERE user_id = ?", [
    userId,
  ]);
  return rows;
};

const createTask = async (
  id,
  userId,
  title,
  description,
  completed = false
) => {
  const res = await db.query(
    "INSERT INTO tasks (id,user_id, title, description,completed) VALUES (?,?, ?, ?,?)",
    [id, userId, title, description, completed]
  );
};

const deleteTask = async (id, userId) => {
  await db.query("DELETE FROM tasks WHERE id = ? AND user_id = ?", [
    id,
    userId,
  ]);
};

module.exports = { getTasks, createTask, deleteTask };
