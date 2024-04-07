import { createSlice } from "@reduxjs/toolkit";

const languageslice = createSlice({
  name: "translate",
  initialState: {
    lang: "en",
  },
  reducers: {
    languagechange: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export default languageslice.reducer;
export const { languagechange } = languageslice.actions;
