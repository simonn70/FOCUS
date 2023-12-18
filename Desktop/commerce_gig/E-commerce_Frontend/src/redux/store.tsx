import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "./slice/authApiSlice";

export const store = configureStore({
  reducer: {
    auth: authApiSlice,
  },
});
