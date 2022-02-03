import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStatus } from "../../models/IStatus";
import { IPriority } from "../../models/IPriority";
import { IUser } from "../../models/IUser";
import { getPriorities, getStatuses, getUsers } from "./actions";

interface AppState {
  statuses: IStatus[];
  priorities: IPriority[];
  users: IUser[];
  loading: {
    statuses: boolean,
    priorities: boolean,
    users: boolean,
  };
  error: string | null;
}

const initialState: AppState = {
  statuses: [],
  priorities: [],
  users: [],
  loading: {
    statuses: false,
    priorities: false,
    users: false,
  },
  error: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: {
    [getUsers.pending.type]: (state) => {
      state.loading.users = true;
      state.error = null;
    },
    [getUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.loading.users = false;
      state.users = action.payload;
    },
    [getUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading.users = false;
      state.error = action.payload;
    },
    [getStatuses.pending.type]: (state) => {
      state.loading.statuses = true;
      state.error = null;
    },
    [getStatuses.fulfilled.type]: (state, action: PayloadAction<IStatus[]>) => {
      state.loading.statuses = false;
      state.statuses = action.payload;
    },
    [getStatuses.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading.statuses = false;
      state.error = action.payload;
    },
    [getPriorities.pending.type]: (state) => {
      state.loading.priorities = true;
      state.error = null;
    },
    [getPriorities.fulfilled.type]: (state, action: PayloadAction<IPriority[]>) => {
      state.loading.priorities = false;
      state.priorities = action.payload;
    },
    [getPriorities.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading.priorities = false;
      state.error = action.payload;
    },
  },
});

export const { clearError } = appSlice.actions;

export default appSlice.reducer;
