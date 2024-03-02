import React from "react";
import netflixlogo from "../assets/Netflix-logo.png";
import { useSelector } from "react-redux";
import { auth } from "../utlis/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const signout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const user = useSelector((state) => state.user);
  return (
    <div>
      <div className="flex justify-between p-3 bg-gradient-to-b from-black ">
        <img className="w-40" src={netflixlogo} alt="logo" />

        {user ? (
          <div className="flex items-center gap-2">
            <h3>{user?.name}</h3>
            <button onClick={signout}>Sign Out</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
