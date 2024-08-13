# Simple Task Manager (Frontend)

This is a simple task manager frontend built using React, Redux, and tailwindcss. It allows users to create, update, and delete tasks, as well as set task priorities and due dates.

## Features

- Create, update, and delete tasks
- Set task priorities (high, medium, low, or none)
- Set due dates for tasks
- View tasks in a list format

## Installation

1. Clone the repository
2. Navigate to the frontend directory
3. Install the dependencies by running `npm install`
4. Start the development server by running `npm run dev`

## Features

- Create a new task
- Update a task
- Delete a task

## Redux

The application uses Redux for state management. The application uses Redux thunk middleware for asynchronous actions. The application uses the following actions:

- `createTask`: Creates a new task
- `updateTask`: Updates a task
- `deleteTask`: Deletes a task
- `updatePriority`: Updates the priority of a task
- `updateStatus`: Updates the status of a task
- `getTask`: Fetches a task from the server
- `fetchTasks`: Fetches tasks from the server ( does not include the description field as to avoid unnecessary data transfer)