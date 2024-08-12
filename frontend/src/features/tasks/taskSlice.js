import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/api/tasks";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const getTask = createAsyncThunk("tasks/getTask", async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
});

export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data.task;
});

export const removeTask = createAsyncThunk("tasks/removeTask", async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data.task;
});

export const updateTask = createAsyncThunk("tasks/updateTask", async (task) => {
  const response = await axios.put(`${API_URL}/${task._id}`, task);
  return response.data.task;
});

export const updateTaskPriority = createAsyncThunk(
  "tasks/updateTaskPriority",
  async ({ id, priority }) => {
    const response = await axios.patch(`${API_URL}/${id}/${priority}`);
    return response.data;
  }
);

export const updateTaskStatus = createAsyncThunk(
  "tasks/updateTaskStatus",
  async (id) => {
    const response = await axios.patch(`${API_URL}/${id}`);
    return response.data;
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    task: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.loading = false;
        state.task = action.payload;
      })
      .addCase(getTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(removeTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter(
          (task) => task._id !== action.payload._id
        );
      })
      .addCase(removeTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
        const taskIndex = state.tasks.findIndex(
          (task) => task._id === action.payload._id
        );
        state.tasks[taskIndex] = action.payload;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(updateTaskPriority.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTaskPriority.fulfilled, (state, action) => {
        state.loading = false;
        const taskIndex = state.tasks.findIndex(
          (task) => task._id === action.payload._id
        );
        state.tasks[taskIndex].priority = action.payload.priority;
      })
      .addCase(updateTaskPriority.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(updateTaskStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTaskStatus.fulfilled, (state, action) => {
        state.loading = false;
        const taskIndex = state.tasks.findIndex(
          (task) => task._id === action.payload._id
        );
        state.tasks[taskIndex].status = action.payload.status;
      })
      .addCase(updateTaskStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default tasksSlice.reducer;
