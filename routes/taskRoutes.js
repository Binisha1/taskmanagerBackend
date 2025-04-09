const express = require("express");
const auth = require("../middleware/authMiddleware");
const {
  getUserTasks,
  addTask,
  removeTask,
} = require("../controllers/taskController");

const router = express.Router();

router.use(auth); // protect all routes below

router.get("/", getUserTasks);
router.post("/", addTask);
router.delete("/:id", removeTask);

module.exports = router;
