import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utlis/userslice";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: "Gurunath M",
            profilephoto: photoURL,
          })
        );
        // ...
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
