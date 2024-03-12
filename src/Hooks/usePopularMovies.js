import React, { useEffect } from "react";
import { MovieOptions } from "../utlis/constant";
import { useDispatch } from "react-redux";
import { addnowplayingmovies, addpopularmovies } from "../utlis/MovieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getpopularmovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MovieOptions
    );
    const json = await response.json();
    dispatch(addpopularmovies(json.results));
  };
  useEffect(() => {
    getpopularmovies();
  }, []);
};
export default usePopularMovies;
