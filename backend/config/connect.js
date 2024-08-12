import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

export default async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI,{
      appName: "Cluster0",
      dbName: "task-manager",
    })
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error('Connection Failed:', error.message)
    process.exit(1);
  }
}