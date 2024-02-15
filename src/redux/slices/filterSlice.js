import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: "",
  gender: "",
  stack: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPosition(state, action) {
      state.position = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setStack(state, action) {
      state.stack = action.payload;
    },
    setRemovePosition(state) {
      state.position = "";
    },
    setRemoveGender(state) {
      state.gender = "";
    },
    setRemoveStack(state) {
      state.stack = "";
    },
  },
});

export const {
  setPosition,
  setGender,
  setStack,
  setRemovePosition,
  setRemoveGender,
  setRemoveStack,
} = filterSlice.actions;

export default filterSlice.reducer;
