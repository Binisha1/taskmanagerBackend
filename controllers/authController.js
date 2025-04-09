const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail } = require("../models/User");
require("dotenv").config();

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await findUserByEmail(email);
  if (existingUser)
    return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(email, hashedPassword);
  res.status(201).json({ message: "User registered successfully" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .json({
      message: "Logged in successfully",
      token, // 👈 include the token in response
      user: {
        id: user.id,
        email: user.email,
      },
    });
};

exports.logout = (req, res) => {
  res.clearCookie("access_token").json({ message: "Logged out" });
};
