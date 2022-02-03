import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIGetAllUsers } from "../../api/users";
import { APIGetStatuses } from "../../api/statuses";
import { APIGetPriorities } from "../../api/priorities";

export const getUsers = createAsyncThunk(
  "app/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { status, data } = await APIGetAllUsers();
      if (status === 200) {
        return data;
      }
      throw new Error("Ошибка при получении списка пользователей");
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

export const getStatuses = createAsyncThunk(
  "app/getStatuses",
  async (_, { rejectWithValue }) => {
    try {
      const { status, data } = await APIGetStatuses();
      if (status === 200) {
        return data;
      }
      throw new Error("Ошибка при получении списка статусов");
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

export const getPriorities = createAsyncThunk(
  "app/getPriorities",
  async (_, { rejectWithValue }) => {
    try {
      const { status, data } = await APIGetPriorities();
      if (status === 200) {
        return data;
      }
      throw new Error("Ошибка при получении списка приоритетов");
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);
