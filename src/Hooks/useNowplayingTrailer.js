import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowplayingtrailer } from "../utlis/MovieSlice";
import { MovieOptions } from "../utlis/constant";

const useNowplayingTrailer = (getmovieid) => {
  const dispatch = useDispatch();
  const getnowplayingtrailer = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        getmovieid +
        "/videos?language=en-US",
      MovieOptions
    );
    const json = await response.json();

    //to filter the trailer key from the response array
    const filtertrailer = json.results.filter(
      (filterdata) => filterdata.type === "Trailer"
    );
    //if the trailer is not avaliable then we can take the first video clip which is avaliable
    const trailerdata = filtertrailer.length ? filtertrailer[0] : json[0];
    dispatch(addnowplayingtrailer(trailerdata));
  };
  useEffect(() => {
    getnowplayingtrailer();
  }, []);
};

export default useNowplayingTrailer;
