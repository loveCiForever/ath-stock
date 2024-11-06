
import * as React from 'react';
import { useState } from 'react';
import { useEffect} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import googleLogo from '../assets/googleLogo.svg';
import githubLogo from '../assets/githubLogo.svg';

import Login from '../pages/Login';

export default function RegisterForm(props) {

  const navigate = useNavigate();
  return (
    <div className="w-full shadow-xs px-30px py-30px">
      <h1 className=" text-start font-700 text-30px">Sign Up For Free</h1>
      <h2 className="tracking-wider text-start font-400 text-15px mt-1px text-placeholder-text-color">To continue with us, create an account.</h2>
      <div className="mt-20px">
        <form className="flex flex-col">
          {/*  */}
          <div className="flex items-center justify-between">
            <div> 
              <input
                onChange={null}
                type="text"
                text={null}
                className="tracking-wide bg-placeholder-bg-color py-14px pl-20px mt-6px text-15px rounded-10px font-400 text-placeholder-text-color"
                name="firstName"
                placeholder="First Name"
                value={null}
              />
            </div>

            <div className="ml-10px">
              <input
                onChange={null}
                type="text"
                text={null}
                className="tracking-wide bg-placeholder-bg-color py-14px pl-20px mt-6px text-15px rounded-10px font-400 text-placeholder-text-color"
                name="lastName"
                placeholder="Last Name"
                value={null}
              />
            </div>
          </div>

          <div className="mt-10px">
            <input
              onChange={null}
              type="email"
              text={null}
              className="w-full tracking-wide bg-placeholder-bg-color py-14px pl-20px mt-6px text-15px rounded-10px font-400 text-placeholder-text-color"
              name="email"
              placeholder="Email"
              value={null}
            />
          </div>
          
          <div className="mt-10px">
            <input
              onChange={null}
              type="text"
              text={null}
              className="w-full tracking-wide bg-placeholder-bg-color py-14px pl-20px mt-6px text-15px rounded-10px font-400 text-placeholder-text-color"
              name="userName"
              placeholder="User name"
              value={null}
            />
          </div>
           
          <div className="mt-10px">
            <input
              onChange={null}
              type="password"
              text={null}
              className="w-full tracking-wide bg-placeholder-bg-color py-14px pl-20px mt-6px text-15px rounded-10px font-400 text-placeholder-text-color"
              name="password"
              placeholder="Password"
              value={null}
            />
          </div>
          
          <div className='flex items-center justify-start mt-10px'>
            <input type="checkbox" id="remember" className='items-center justify-center ml-5px max-h-3'/>
            <label className="items-center justify-center ml-2 text-base font-normal text-13px hover:underline" 
                  for="remember">I agree to all Terms, Privacy and Fees</label>
          </div>

          <div className="flex flex-col mt-20px">
            <button
              onClick={null}
              className="py-14px rounded-xl bg-black
                    text-15px text-white font-400
                    tracking-wider
                    hover:bg-gray-700
                    active:scale-[.98] active:duration-75 transition-all"
            >
              Sign up
            </button>
            <div className='flex items-center justify-center mt-10px'>
              <hr className="w-1/4 h-1/2 bg-placeholder-bg-color"/>
              <h2 className="tracking-wider text-center font-400 text-13px my-10px mx-20px text-placeholder-text-color">Or sign up with</h2>
              <hr className="w-1/4 h-1/2 bg-placeholder-bg-color"/>
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
                <h1 className="ml-10px text-14px font-500">Sign up with Google</h1>
              </button>
              {/* <button
                className="flex content-center items-center justify-center 
                  border-2 border-gray-200 py-3 rounded-xl mt-10px
                  bg-white text-black font-normal
                  hover:bg-gray-100
                  active:scale-[.98] active:duration-75 transition-all "
              >
                <img src={facebookLogo} />
              </button> */}
              {/* <button
                className="flex content-center items-center justify-center 
                  border-2 border-gray-200 py-3 rounded-xl mt-10px
                  bg-white text-black font-normal
                  hover:bg-gray-100
                  active:scale-[.98] active:duration-75 transition-all "
              >
                <img src={appleLogo} />
              </button> */}
              <button
                className="flex content-center items-center justify-center 
                  border-2 border-gray-200 py-3 rounded-xl mt-10px
                  bg-white text-black font-normal
                  hover:bg-gray-100
                  active:scale-[.98] active:duration-75 transition-all "
              >
                <img src={githubLogo}/>
                <h1 className="ml-10px text-14px font-500">Sign up with Github </h1>
              </button>
            </div>

            <div className="flex items-center content-center justify-center mt-10px">
              <div className="tracking-wider text-14px font-400">
                Already have an account?
              </div>
              <button
                onClick={() => navigate('/login')}
                className="ml-3px font-500 text-14px text-black
                  hover:text-black hover:underline
                  active:scale-[.98] active:duration-75 transition-all tracking-wider"
              >
                Sign in
              </button>
            </div>          
          </div>  

        </form>
      </div>
    </div>
  );
}
