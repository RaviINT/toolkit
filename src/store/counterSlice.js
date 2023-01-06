import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  data: [],
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    add: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { increment, add } = counterSlice.actions;
export default counterSlice.reducer;
