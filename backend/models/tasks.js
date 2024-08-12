import mongoose from "mongoose";

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

export default mongoose.model("Task", taskSchema);