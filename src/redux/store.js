import { configureStore } from "@reduxjs/toolkit";
import employee from "./slices/employeeSlice";
import search from "./slices/searchSlice";
import filter from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    employee,
    search,
    filter,
  },
});
