import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../models/ITask";

interface TasksState {
  tasks: ITask[];
  currentTask: ITask | null;
}

const initialState: TasksState = {
  tasks: [],
  currentTask: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setCurrentTask(state, action: PayloadAction<ITask | null>) {
      state.currentTask = action.payload;
    },
  },
  extraReducers: {

  },
});

export const { setCurrentTask } = tasksSlice.actions;

export default tasksSlice.reducer;
