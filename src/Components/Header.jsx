import React, { useEffect } from "react";
import netflixlogo from "../assets/Netflix-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utlis/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utlis/userslice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //event listener will continously check where the user is there or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
            profilephoto: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  const signout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <div className=" flex justify-between p-3 bg-gradient-to-b from-black ">
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
