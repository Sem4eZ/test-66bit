import { configureStore } from "@reduxjs/toolkit";
import employee from "./slices/employeeSlice";

export const store = configureStore({
  reducer: {
    employee,
  },
});
