import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowplayingmovies: null,
    nowplayingtrailer: null,
  },
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.nowplayingmovies = action.payload;
    },
    addnowplayingtrailer: (state, action) => {
      state.nowplayingtrailer = action.payload;
    },
  },
});

export default MovieSlice.reducer;
export const { addnowplayingmovies, addnowplayingtrailer } = MovieSlice.actions;
