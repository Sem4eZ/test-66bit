import { configureStore } from "@reduxjs/toolkit";
import employee from "./slices/employeeSlice";
import search from "./slices/searchSlice";
import filter from "./slices/filterSlice";
import theme from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    employee,
    search,
    filter,
    theme,
  },
});
