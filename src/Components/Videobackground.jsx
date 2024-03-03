import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useNowplayingTrailer from "../Hooks/useNowplayingTrailer";

const Videobackground = ({ movieid }) => {
  const trailerselector = useSelector(
    (state) => state.movies.nowplayingtrailer
  );
  // this custom hook is used to fetch the background video of the movie name displayed
  useNowplayingTrailer(movieid);
  return (
    <div>
      <iframe
        frameBorder="0"
        src={
          "https://www.youtube.com/embed/" +
          trailerselector?.key +
          "?si=5wsO--aWp3EJbzQ-"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videobackground;
