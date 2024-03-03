import React, { useEffect } from "react";
import { MovieOptions } from "../utlis/constant";
import { useDispatch } from "react-redux";
import { addnowplayingmovies } from "../utlis/MovieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getnowplayingmovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MovieOptions
    );
    const json = await response.json();
    dispatch(addnowplayingmovies(json.results));
  };
  useEffect(() => {
    getnowplayingmovies();
  }, []);
};
export default useNowPlayingMovies;
