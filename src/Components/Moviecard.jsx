import React from "react";
import { Postercdn } from "../utlis/constant";

const Moviecard = ({ gotmovies }) => {
  return (
    <div>
      <div className="w-48 shadow-2xl ">
        <img className="rounded-lg " src={Postercdn + gotmovies} alt="" />
      </div>
    </div>
  );
};

export default Moviecard;
