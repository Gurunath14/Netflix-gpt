import React from "react";
import GptSearch from "./GptSearch";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptLanding = () => {
  return (
    <div>
      <GptSearch />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptLanding;
