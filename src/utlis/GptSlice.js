import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gptslice",
  initialState: {
    togglevalue: false,
  },
  reducers: {
    GptToggle: (state, action) => {
      state.togglevalue = !state.togglevalue;
    },
  },
});

export default GptSlice.reducer;
export const { GptToggle } = GptSlice.actions;
