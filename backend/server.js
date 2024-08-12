import express from "express";
import cors from 'cors';
import morgan from "morgan";
import taskRouter from "./routes/tasks.js";
import connect from "./config/connect.js";


const app = express()

connect();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/tasks", taskRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});