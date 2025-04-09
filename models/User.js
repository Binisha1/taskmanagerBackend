const db = require("../config/db");

const createUser = async (email, hashedPassword) => {
  const [rows] = await db.query(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, hashedPassword]
  );
  return rows.insertId;
};

const findUserByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

module.exports = { createUser, findUserByEmail };
