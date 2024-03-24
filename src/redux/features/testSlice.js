import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: [],
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addTest: (state, action) => {
      state.test.push({ ...action.payload });
    },
    removeTest: (state, action) => {
      state.test = state.test.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addTest, removeTest } = testSlice.actions;

export default testSlice.reducer;
