import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div className="flex flex-col  gap-4 py-36 px-4 justify-center items-start">
      <p className="text-4xl font-bold">{title}</p>
      <p className="w-80 text-sm">{overview}</p>

      <div className="flex  gap-3">
        <button className=" py-3 text-white w-36 text-center rounded-xl bg-gray-300">
          {" "}
          ▶️Play
        </button>
        <button className=" py-3 w-36 text-white text-center rounded-xl bg-gray-300">
          ℹ️Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
