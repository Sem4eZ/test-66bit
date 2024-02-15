import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const employeesSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployees(state, action) {
      state.employees.push(...action.payload);
    },
  },
});

export const { setEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;
