import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: "loginuser",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => null,
  },
});

export default userslice.reducer;
export const { addUser, removeUser } = userslice.actions;
