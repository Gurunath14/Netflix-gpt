import React, { useRef, useState } from "react";
import Header from "./Header";
import { updateProfile } from "firebase/auth";
import validation from "../utlis/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utlis/firebase";
import { Profileurl } from "../utlis/constant";

const Login = () => {
  const Name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [gotvalidation, setgotvalidation] = useState("");
  //the signin is false shows the signin page
  const [issignin, setissignin] = useState(false);

  const validationcheck = () => {
    const errormessage = validation(
      email.current.value,
      password?.current?.value
    );
    setgotvalidation(errormessage);
    console.log(errormessage);
    // error is {} it's true value so it return from there it will not procced further because the
    // code has validations
    if (errormessage) return;

    if (issignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: Name.current.value,
            photoURL: Profileurl,
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Firebase Error:", errorCode, errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Firebase Error:", errorCode, errorMessage);
        });
    }
  };
  const signupswitch = () => {
    setissignin(!issignin);
  };
  return (
    <div
      className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg')] 
       h-screen"
    >
      <Header />
      <form
        className="flex h-full justify-center items-center "
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col justify-start bg-black w-4/12 px-10 py-20 text-white rounded-lg  bg-opacity-80">
          <h1 className="text-3xl font-bold">
            {issignin ? "Sign Up" : "Sign In"}
          </h1>
          {issignin ? (
            <input
              placeholder="Full name"
              type="text"
              className="px-3 py-4 w-full my-3 bg-gray-700 rounded-lg outline-slate-400 bg-opacity-65"
              ref={Name}
            />
          ) : (
            ""
          )}
          <input
            ref={email}
            placeholder="Email Address"
            type="email"
            className="px-3 py-4 w-full my-3 bg-gray-700 rounded-lg outline-slate-400 bg-opacity-65"
          />
          {gotvalidation ? <p>{gotvalidation.mail}</p> : ""}
          <input
            ref={password}
            placeholder="Password"
            type="password"
            className="px-3 py-4 w-full my-3 text-white  rounded-lg bg-gray-700 outline-slate-400 bg-opacity-65 "
          />
          {gotvalidation ? <p>{gotvalidation.password}</p> : ""}

          <button
            onClick={validationcheck}
            className="bg-red-700 p-3 my-3 w-full rounded-lg "
          >
            Sign in
          </button>

          <div>
            <p>
              {issignin ? "Already Have An Account? " : "New to Netflix? "}
              <span className="cursor-pointer" onClick={signupswitch}>
                {issignin ? "Sign in Now" : "Sign up Now"}
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
