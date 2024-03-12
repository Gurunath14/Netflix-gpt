import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowplayingmovies: null,
    nowplayingtrailer: null,
    popularmovies: null,
    topmovies: null,
  },
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.nowplayingmovies = action.payload;
    },
    addnowplayingtrailer: (state, action) => {
      state.nowplayingtrailer = action.payload;
    },
    addpopularmovies: (state, action) => {
      state.popularmovies = action.payload;
    },
    addtopmovies: (state, action) => {
      state.topmovies = action.payload;
    },
  },
});

export default MovieSlice.reducer;
export const {
  addnowplayingmovies,
  addnowplayingtrailer,
  addpopularmovies,
  addtopmovies,
} = MovieSlice.actions;
