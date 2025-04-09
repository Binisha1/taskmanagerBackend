const db = require("../config/db");

const getTasks = async (userId) => {
  const [rows] = await db.query("SELECT * FROM tasks WHERE user_id = ?", [
    userId,
  ]);
  return rows;
};

const createTask = async (userId, title, description) => {
  await db.query(
    "INSERT INTO tasks (user_id, title, description) VALUES (?, ?, ?)",
    [userId, title, description]
  );
};

const deleteTask = async (id, userId) => {
  await db.query("DELETE FROM tasks WHERE id = ? AND user_id = ?", [
    id,
    userId,
  ]);
};

module.exports = { getTasks, createTask, deleteTask };
