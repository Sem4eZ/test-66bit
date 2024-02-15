import { configureStore } from "@reduxjs/toolkit";
import employee from "./slices/employeeSlice";
import search from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    employee,
    search,
  },
});
