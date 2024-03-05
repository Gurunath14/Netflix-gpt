import React from "react";
import { Postercdn } from "../utlis/constant";

const Moviecard = ({ gotmovies }) => {
  return (
    <div className="w-48">
      <img src={Postercdn + gotmovies} alt="" />
    </div>
  );
};

export default Moviecard;
