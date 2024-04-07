import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./Secondarycontainer";
import GptLanding from "./GptLanding";
import { useSelector } from "react-redux";

const Browse = () => {
  const selector = useSelector((state) => state.gptdata.togglevalue);
  console.log(selector);
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {selector ? (
        <GptLanding />
      ) : (
        <>
          <Maincontainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
