
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

import googleLogo from '../../assets/logo/googleLogo.svg';
import githubLogo from '../../assets/logo/githubLogo.svg';

export default function SignInForm(props) {
  const navigate = useNavigate();
  // const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  // const onSubmit = data => {
  //     console.log(data)
  // };

  return (
    <div className="w-full shadow-xs pr-[30px] py-[30px] min-w-[96px]">
      <h1 className="text-start font-700 text-30px">Welcome Back!</h1>
      <h2 className="tracking-wider text-start font-400 text-[15px] mt-[1px] text-placeholder-text-color">To continue, sign in to your account.</h2>
      <div className="mt-[20px]">
        <form className="flex flex-col">
          <div>
            <input
              onChange={null}
              type="email"
              text={null}
              className="w-full tracking-wide bg-placeholder-bg-color py-[14px] pl-[20px] mt-[6px] text-[15px] rounded-[10px] font-400 text-placeholder-text-color min-w-[350px]"
              name="email"
              placeholder="Enter your mail"
              value={null}
            />
          </div>
          <div className="mt-10px">
            <input
              onChange={handleChange}
              type="password"
              text={loginForm.password}
              className="w-full tracking-wide bg-placeholder-bg-color py-14px pl-20px mt-6px text-15px rounded-10px font-400 text-placeholder-text-color min-w-350"
              name="password"
              placeholder="Password"
              value={loginForm.password}
            />
          </div>

          <div className="flex items-center justify-end mt-10px">
            <button
              className="font-600 text-14px text-black
                    hover:text-black
                    0 active:scale-[.98] hover:underline active:duration-75 transition-all "
            >
              Forgot password
            </button>
          </div>

          <div className="flex flex-col mt-20px">
            <button
              type="submit"
              onClick={logMeIn}
              className="py-14px rounded-xl bg-black
                    text-15px text-white font-400
                    tracking-wider
                    hover:bg-gray-700
                    active:scale-[.98] active:duration-75 transition-all"
            >
              Sign in
            </button>
            <div className='flex items-center justify-center mt-10px'>
              <hr className="w-1/4 h-1/2 bg-placeholder-bg-color" />
              <h2 className="tracking-wider text-center font-400 text-13px my-10px mx-20px text-placeholder-text-color">Or sign in with</h2>
              <hr className="w-1/4 h-1/2 bg-placeholder-bg-color" />
            </div>

            <div className="flex flex-col">
              <button
                className="flex content-center items-center justify-center 
                  border-2 border-gray-200 py-3 rounded-xl mt-10px
                  bg-white text-black font-normal
                  hover:bg-gray-100
                  active:scale-[.98] active:duration-75 transition-all "
              >
                <img src={googleLogo} />
                <h1 className="ml-10px text-14px font-500">Sign in with Google</h1>
              </button>

              <button
                className="flex content-center items-center justify-center 
                  border-2 border-gray-200 py-3 rounded-xl mt-10px
                  bg-white text-black font-normal
                  hover:bg-gray-100
                  active:scale-[.98] active:duration-75 transition-all "
              >
                <img src={githubLogo} />
                <h1 className="ml-10px text-14px font-500">Sign in with Github </h1>
              </button>
            </div>

            <div className="flex items-center content-center justify-center mt-10px">
              <div className="tracking-wider text-14px font-400">
                Don't have an account?
              </div>
              <button
                onClick={() => navigate('/signup')}
                className="ml-3px font-500 text-14px text-black
                  hover:text-black hover:underline
                  active:scale-[.98] active:duration-75 transition-all tracking-wider"
              >
                Sign up
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
