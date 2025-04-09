const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://taskmanagerbini.netlify.app",
    "https://taskmanagerbini.vercel.app",
  ],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/", (req, res) => {
  res.send("Server is running!");
});
