import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import authReducer from "./slices/authSlice";
import studentAuthReducer from "./slices/studentAuthSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    studentAuth: studentAuthReducer,
  },
});

export default store;
