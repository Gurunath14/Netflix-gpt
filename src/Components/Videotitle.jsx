import React from "react";
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";

const Videotitle = ({ title, overview }) => {
  return (
    <div className=" absolute w-full aspect-video text-white bg-gradient-to-r from-black flex flex-col gap-5 py-36 px-5 justify-center items-start">
      <p className="text-4xl font-bold">{title}</p>
      <p className="w-80 text-sm">{overview}</p>

      <div className="flex  gap-3">
        <button className=" flex items-center justify-center py-3 text-black w-36 text-center  text-xl rounded-xl bg-white hover:bg-opacity-80 ">
          {" "}
          <FaPlay className="w-4 mx-1" /> Play
        </button>
        <button className=" flex items-center justify-center py-3 w-36 text-white text-center rounded-xl bg-opacity-50 bg-gray-500">
          <GrCircleInformation className="w-4 mx-1" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
