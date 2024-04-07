import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice";
import MovieSlice from "./MovieSlice";
import GptSlice from "./GptSlice";
import languageslice from "./languageslice";

const appStore = configureStore({
  reducer: {
    user: userslice,
    movies: MovieSlice,
    gptdata: GptSlice,
    translate: languageslice,
  },
});

export default appStore;
