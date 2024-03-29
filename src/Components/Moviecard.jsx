import React from "react";
import { Postercdn } from "../utlis/constant";

const Moviecard = ({ gotmovies }) => {
  return (
    <div>
      <div className="w-48 ">
        <img
          className="rounded-lg hover: cursor-pointer "
          src={Postercdn + gotmovies}
          alt=""
        />
      </div>
    </div>
  );
};

export default Moviecard;
