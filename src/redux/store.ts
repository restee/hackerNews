import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import storiesReducer from "./slices/storiesSlice";

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    story: storiesReducer
  }
});
