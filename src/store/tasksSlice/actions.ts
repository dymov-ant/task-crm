import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  APICreateTask, APIGetAllTasks, APIGetTaskById, APIUpdateTask,
} from "../../api/tasks";
import { CreateTaskPayload, PayloadUpdateTask } from "../../models/ITask";

export const getAllTasks = createAsyncThunk(
  "tasks/getAllTasks",
  async (_, { rejectWithValue }) => {
    try {
      const { status, data } = await APIGetAllTasks();
      if (status === 200) {
        return data.value;
      }
      throw new Error("Ошибка при получении списка задач");
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

export const getTaskById = createAsyncThunk(
  "tasks/getTaskById",
  async (id: number, { rejectWithValue }) => {
    try {
      const { status, data } = await APIGetTaskById(id);
      if (status === 200) {
        return data;
      }
      throw new Error("Ошибка при получении задачи");
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (payload: PayloadUpdateTask, { rejectWithValue }) => {
    try {
      const { status } = await APIUpdateTask(payload);
      if (status === 200) {
        const { status: taskStatus, data } = await APIGetTaskById(payload.id);
        if (taskStatus === 200) {
          return data;
        }
      }
      throw new Error("Ошибка при обновлении задачи");
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async ({ name, description }: CreateTaskPayload, { rejectWithValue }) => {
    try {
      const { status: createStatus, data: taskId } = await APICreateTask(name, description);
      if (createStatus === 200) {
        const { status: getStatus, data: task } = await APIGetTaskById(taskId);
        if (getStatus === 200) {
          return task;
        }
        throw new Error("Ошибка при получении данных о созданной задаче");
      }
      throw new Error("Ошибка при создании задачи");
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);
