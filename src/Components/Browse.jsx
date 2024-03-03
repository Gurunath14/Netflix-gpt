import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./Secondarycontainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <Maincontainer />
    </div>
  );
};
export default Browse;
