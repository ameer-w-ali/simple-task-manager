# Simple Task Manager (Backend)

This is a simple task manager backend built using Node.js, Express, and MongoDB. It allows users to create, read, update, and delete tasks. The application also includes a feature to update the status of a task. It also includes morgan for logging.

## Features

- Create tasks
- Read tasks
- Update tasks
- Update task status
- Delete tasks

## Installation

1. Clone the repository
2. Navigate to the backend directory
3. Install the dependencies by running `npm install`
4. Start the server by running `npm run dev`


## Request Body 
```json
{
  "title": "Task Title",
  "description": "Task Description", //optional
  "status": "pending", //optional, default is pending
  "priority": "none", //optional, default is none
  "dueDate": "2023-01-01" //optional
}
```
## Routes

- `POST /api/tasks/`: Create a new task
- `GET /api/tasks/`: Get all tasks
- `GET /api/tasks/:id`: Get a task by ID
- `PUT /api/tasks/:id`: Update a task by ID
- `PATCH /api/tasks/:id/`: Update the status of a task by ID (i.e. complete, incomplete)
- `PATCH /api/tasks/:id/:priority`: Update the priority of a task by ID (i.e. high, medium, low, none)
- `DELETE /api/tasks/:id`: Delete a task by ID

## Responses
- 200 OK
- 201 Created
- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

## Models
- `Task`
```js
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status:{
    type: Boolean,
    default: false,
  },
  priority: {
    type: String,
    default: "none",
	  enum: ["high", "medium", "low","none"],
  },
  dueDate:{
    type: Date,
  }
});
```

## Logging

The application uses the [morgan](https://github.com/expressjs/morgan) package for logging. The application logs the following information:
- Request method
- Request URL
- Request body
- Response status code
- Response body
- Timestamp

## Validation

The application uses the [express-validator](https://github.com/express-validator/express-validator) package for validation. The application validates the following fields:
- title
- description
- priority
- dueDate