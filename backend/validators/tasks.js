import { check } from "express-validator";

export const validateAddTask = [
  check("title", "Title is required").not().isEmpty().isString(),
  check("status","Status is required").optional().isBoolean(),
  check("description", "Description must be a string").optional().isString(),
  check(
    "priority",
    'priority must be either "high", "medium", "low", or "none"'
  )
    .optional()
    .isIn(["high", "medium", "low", "none"]),
  check("dueDate", "Due date must be a valid date").optional().isDate(),
];

export const validateUpdateTask = [
  check("title", "Title is required").not().isEmpty().isString(),
  check("status","Status is required").optional().isBoolean(),
  check("description", "Description must be a string").optional().isString(),
  check(
    "priority",
    'priority must be either "high", "medium", "low", or "none"'
  )
    .optional()
    .isIn(["high", "medium", "low", "none"]),
  check("dueDate", "Due date must be a valid date").optional().isDate(),
];
