import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ title, Movies }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div className=" flex  overflow-x-scroll">
          <div className="flex ">
            {Movies
              ? Movies.map((mapdata) => (
                  <Moviecard
                    className="pointer-events-none"
                    gotmovies={mapdata.poster_path}
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movielist;
