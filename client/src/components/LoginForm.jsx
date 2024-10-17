import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import appleLogo from "../assets/apple.svg";
import facebookLogo from "../assets/facebook.svg";
import googleLogo from "../assets/google.svg";
import githubLogo from "../assets/github.svg";

export default function LoginForm(props) {
  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  function logMeIn(event) {
    event.preventDefault();
    if (!validateInput(loginForm)) {
      setError("Invalid Input");
      return;
    }
    axios
      .post("/token", {
        email: loginForm.email,
        password: loginForm.password,
      })
      .then((response) => {
        props.setToken(response.data.access_token);
        // Redirect to protected route or display success message
      })
      .catch((error) => {
        setError("Login failed");
        console.error(error);
      });

    setloginForm({
      email: "",
      password: "",
    });
  }

  function validateInput(input) {
    // Add input validation logic here
    // For example:
    if (!input.email || !input.password) {
      return false;
    }
    return true;
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setloginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  return (
    <div className="w-full bg-white shadow-xl px-105px py-86px rounded-30px">
      <h1 className="text-center font-700 text-60px">Welcome Back</h1>
      <div className="mt-42px">
        <form className="flex flex-col">
          <label className="font-400 text-18px">Email</label>
          <div>
            <input
              onChange={handleChange}
              type="email"
              text={loginForm.email}
              className="w-full bg-placeholder-bg-color py-20px pl-26px mt-6px text-18px rounded-10px font-400 text-placeholder-text-color min-w-480"
              name="email"
              placeholder="Enter your mail"
              value={loginForm.email}
            />
          </div>
          <label className="font-400 text-18px mt-18px">Password</label>
          <div>
            <input
              onChange={handleChange}
              type="password"
              text={loginForm.password}
              className="w-full bg-placeholder-bg-color py-20px pl-26px mt-6px text-18px rounded-10px font-400 text-placeholder-text-color min-w-480"
              name="password"
              placeholder="Enter your password"
              value={loginForm.password}
            />
          </div>

          <div className="flex items-center justify-between mt-18px">
            <div>
              <input type="checkbox" id="remember" />
              <label
                className="items-center justify-center ml-2 font-400 text-15px"
                for="remember"
              >
                Remember for 30 days
              </label>
            </div>
            <button
              className="font-700 text-15px text-orange-text-color
                    hover:text-orange-500
                    0 active:scale-[.98] active:duration-75 transition-all "
            >
              Forgot password
            </button>
          </div>

          <div className="flex flex-col mt-42px">
            <button
              onClick={logMeIn}
              className="py-15px rounded-xl bg-orange-button-bg-color
                    text-25px text-white font-700
                    hover:bg-orange-400
                    active:scale-[.98] active:duration-75 transition-all"
            >
              Sign In
            </button>
            <h2 className="text-center font-400 text-20px my-15px">OR</h2>

            <div className="flex">
              <button
                className="flex w-1/4 content-center items-center justify-center 
                border-2 border-gray-200 py-4 rounded-xl 
                bg-white text-black font-normal
                hover:bg-gray-100
                active:scale-[.98] active:duration-75 transition-all "
              >
                <img src={googleLogo} />
              </button>
              <button
                className="flex w-1/4 ml-3 content-center items-center justify-center 
                  border-2 border-gray-200 py-3 rounded-xl 
                  bg-white text-black font-normal
                  hover:bg-gray-100
                  active:scale-[.98] active:duration-75 transition-all "
              >
                <img src={facebookLogo} />
              </button>
              <button
                className="flex w-1/4 ml-3 content-center items-center justify-center 
                  border-2 border-gray-200 py-3 rounded-xl 
                  bg-white text-black font-normal
                  hover:bg-gray-100
                  active:scale-[.98] active:duration-75 transition-all "
              >
                <img src={appleLogo} />
              </button>
              <button
                className="flex w-1/4 ml-3 content-center items-center justify-center 
                  border-2 border-gray-200 py-3 rounded-xl 
                  bg-white text-black font-normal
                  hover:bg-gray-100
                  active:scale-[.98] active:duration-75 transition-all "
              >
                <img src={githubLogo} />
              </button>
            </div>

            <div className="flex items-center content-center justify-center mt-10px">
              <div className="text-18px font-400">
                Don't have an account?
              </div>
              <button
                className="ml-2 font-700 text-18px text-orange-text-color
                  hover:text-orange-500
                  active:scale-[.98] active:duration-75 transition-all"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      {error && (
        <div className="flex items-center justify-center w-1/2 py-2 mx-auto mt-6 text-2xl font-semibold text-white bg-red-500 border-2 border-red-300 error rounded-xl">
          {error}
        </div>
      )}
    </div>
  );
}
