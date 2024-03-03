import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice";
import MovieSlice from "./MovieSlice";

const appStore = configureStore({
  reducer: {
    user: userslice,
    movies: MovieSlice,
  },
});

export default appStore;
