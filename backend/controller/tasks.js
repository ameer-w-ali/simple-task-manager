import { validationResult } from "express-validator";
import Task from "../models/tasks.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().select("title status priority dueDate _id");
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const addTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { title, description, priority, dueDate } = req.body;
    const task = new Task({ title, description, priority, dueDate });
    await task.save();
    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({
        message: "Task ID is required",
      });
    }
    const { title, description, priority, dueDate } = req.body;
    let task = await Task.findByIdAndUpdate(req.params.id, {
      title,
      description,
      priority,
      dueDate,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    task.title = title || task.title;
    task.description = description || task.description;
    task.priority = priority || task.priority;
    task.dueDate = dueDate || task.dueDate;
    await task.save();
    res.status(200).json({ message: "Task updated successfully", task });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const updatePriority = async (req, res) => {
  try {
    const { id, priority } = req.params;
    if (!id || !priority) {
      return res.status(400).json({
        message: "Task ID and status are required",
      });
    }

    if (!["high", "medium", "low","none"].includes(priority)) {
      return res.status(400).json({
        message:
          "Priority must be either 'high', 'medium', 'low', or 'none'",
      });
    }

    const task = await Task.findByIdAndUpdate(id, {
      priority,
    });
    res.status(200).json({
      message: "Task status updated successfully",
      _id: task._id,
      priority,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { id} = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Task ID is required",
      });
    }
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    task.status = !task.status;
    await task.save();
    res.status(200).json({ message: "Task status updated successfully", _id:task._id,status:task.status });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

export const deleteTask = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({
        message: "Task ID is required",
      });
    }
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    res.status(200).json({ message: "Task deleted successfully", task });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};