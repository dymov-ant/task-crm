import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../models/ITask";
import {
  createTask, getAllTasks, getTaskById, updateTask,
} from "./actions";

interface TasksState {
  tasks: ITask[];
  currentTask: ITask | null;
  isAllLoading: boolean;
  isTaskLoading: boolean;
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  currentTask: null,
  isAllLoading: false,
  isTaskLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setCurrentTask(state, action: PayloadAction<ITask | null>) {
      state.currentTask = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: {
    [getAllTasks.pending.type]: (state) => {
      state.isAllLoading = true;
      state.error = null;
    },
    [getAllTasks.fulfilled.type]: (state, action: PayloadAction<ITask[]>) => {
      state.isAllLoading = false;
      state.tasks = action.payload;
    },
    [getAllTasks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isAllLoading = false;
      state.error = action.payload;
    },
    [createTask.pending.type]: (state) => {
      state.isTaskLoading = true;
      state.error = null;
    },
    [createTask.fulfilled.type]: (state, action: PayloadAction<ITask>) => {
      state.isTaskLoading = false;
      state.tasks.push(action.payload);
      state.currentTask = action.payload;
    },
    [createTask.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isTaskLoading = false;
      state.error = action.payload;
    },
    [updateTask.pending.type]: (state) => {
      state.isTaskLoading = true;
      state.error = null;
    },
    [updateTask.fulfilled.type]: (state, action: PayloadAction<ITask>) => {
      state.isTaskLoading = false;
      state.tasks = state.tasks.map((task) => (
        task.id === action.payload.id ? action.payload : task
      ));
      state.currentTask = action.payload;
    },
    [updateTask.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isTaskLoading = false;
      state.error = action.payload;
    },
    [getTaskById.pending.type]: (state) => {
      state.isTaskLoading = true;
      state.error = null;
    },
    [getTaskById.fulfilled.type]: (state, action: PayloadAction<ITask>) => {
      state.isTaskLoading = false;
      state.currentTask = action.payload;
    },
    [getTaskById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isTaskLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setCurrentTask, clearError } = tasksSlice.actions;

export default tasksSlice.reducer;
