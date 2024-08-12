import express from "express";
import {
  addTask,
  deleteTask,
  getTask,
  getTasks,
  updatePriority,
  updateStatus,
  updateTask,
} from "../controller/tasks.js";
import { validateAddTask, validateUpdateTask } from "../validators/tasks.js";

const router = express.Router();

router.post("/", validateAddTask, addTask);

router.get("/", getTasks);

router.get("/:id", getTask);

router.put("/:id", validateUpdateTask, updateTask);

router.patch("/:id", updateStatus);

router.patch("/:id/:priority", updatePriority);

router.delete("/:id", deleteTask);

export default router;
