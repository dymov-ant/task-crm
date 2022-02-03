import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice/reducer";
import appReducer from "./appSlice/reducer";

const rootReducer = combineReducers({
  appReducer,
  tasksReducer,
});

const setupStore = () => configureStore({
  reducer: rootReducer,
});

export const store = setupStore();

type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
