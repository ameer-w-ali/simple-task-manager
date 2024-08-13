# Simple Task Manager

This is a simple task manager built using React, Redux, Express, and MongoDB. It allows users to create, update, and delete tasks, as well as set task priorities and due dates.

## Features

- Create, update, and delete tasks
- Set task priorities (high, medium, low, or none)
- Set due dates for tasks
- View tasks in a list format

## Installation

- Clone the repository

```sh
git clone https://github.com/ameerwajidali/simple-task-manager.git
```

### Backend
- change directory to `backend`
- Install dependencies using `npm install`
- Create a `.env` file in the root directory of backend and add the following variables:
   - `PORT`: The port number to run the server on (default: 3000)
   - `MONGODB_URI`: The MongoDB connection URI
- Run the backend server using `npm run dev`.
- The backend server will be available at `http://localhost:3000/`
- Checkout the backend README for more details [Backed Readme](/backend/README.md)

### Frontend
- change directory to `frontend`
- Install dependencies using `npm install`
- Run the frontend application using `npm run dev`.
- The frontend application will be available at `http://localhost:5173/`
- Check the frontend README for more details [Frontend Readme](/frontend/README.md)

### **Note: Make sure to have the backend server running before running the frontend application. and also make sure to have a `.env` file in the root directory of backend.**