import React from "react";
import netflixlogo from "../assets/Netflix-logo.png";

const Header = () => {
  return (
    <div className="flex justify-start p-3 bg-gradient-to-b from-black ">
      <img className="w-40" src={netflixlogo} alt="logo" />
    </div>
  );
};

export default Header;
