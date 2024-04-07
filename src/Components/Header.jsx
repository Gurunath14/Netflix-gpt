import React, { useEffect } from "react";
import netflixlogo from "../assets/Netflix-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utlis/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utlis/userslice";
import { GptToggle } from "../utlis/GptSlice";
import language from "../utlis/Language";
import { languagesupport } from "../utlis/constant";
import { languagechange } from "../utlis/languageslice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const translate = useSelector((state) => state.gptdata.togglevalue);
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

  const gptchangetoggle = () => {
    dispatch(GptToggle());
  };
  const languageselected = (e) => {
    let value = e.target.value;
    dispatch(languagechange(value));
  };

  return (
    <div>
      <div className=" text-white absolute z-10 w-full flex items-center justify-between p-3 bg-gradient-to-b from-black ">
        <img className="w-40" src={netflixlogo} alt="logo" />

        {user ? (
          <div className="flex items-center gap-4">
            {translate ? (
              <select
                onChange={languageselected}
                className=" p-1 bg-black rounded-lg outline-slate-400 bg-opacity-65"
              >
                {languagesupport.map((mapdata, index) => (
                  <option key={index} value={mapdata.identiy}>
                    {mapdata.value}
                  </option>
                ))}
              </select>
            ) : (
              ""
            )}

            <div onClick={gptchangetoggle}>GPT Search</div>
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
