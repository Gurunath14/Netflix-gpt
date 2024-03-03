import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: "loginuser",
  initialState: null,
  reducers: {
    //if you return anything from the action it automatically update the state
    // in this case the initial state is null so adduser the adduser will return the value that automatically
    //update the state like the value which are reduced in the action will directly update the slice state
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => null,
  },
});

export default userslice.reducer;
export const { addUser, removeUser } = userslice.actions;
