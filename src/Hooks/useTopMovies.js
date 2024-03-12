import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtopmovies } from "../utlis/MovieSlice";
import { MovieOptions } from "../utlis/constant";

const useTopMovies = () => {
  const dispatch = useDispatch();
  const getpopularmovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MovieOptions
    );
    const json = await response.json();
    dispatch(addtopmovies(json.results));
  };
  useEffect(() => {
    getpopularmovies();
  }, []);
};

export default useTopMovies;
