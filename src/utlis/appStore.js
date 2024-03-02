import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice";

const appStore = configureStore({
  reducer: {
    user: userslice,
  },
});

export default appStore;
