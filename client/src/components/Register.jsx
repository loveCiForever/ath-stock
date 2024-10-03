
import * as React from 'react';
import { useState } from 'react';
import { useEffect} from 'react';
import axios from "axios";

import appleLogo from '../assets/apple.svg';
import facebookLogo from '../assets/facebook.svg';
import googleLogo from '../assets/google.svg';
import githubLogo from '../assets/github.svg';

function Register(props) {


  return (
    <div className="w-full bg-white px-10 py-20 rounded-3xl shadow-xl">
      <h1 className="text-3xl tracking-widest font-medium text-center">Sign Up For Free</h1>
      <div className="mt-8">
        <form className="flex flex-col">

          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <label className="text-lg font-normal">First Name</label>
              <div>
                <input onChange={null} 
                      type="firstName"
                      text={null}
                      className="w-full rounded-xl p-4 mt-1 
                      text-lg
                      bg-gray-100"
                      name="email" 
                      placeholder="Enter your first name" 
                      value={null} />
              </div>
            </div>

            <div className="w-1/2 ml-5">
              <label className="text-lg font-normal">Last Name</label>
              <div>
                <input onChange={null} 
                      type="text"
                      text={null}
                      className="w-full rounded-xl p-4 mt-1 
                      text-lg
                      bg-gray-100"
                      name="email" 
                      placeholder="Enter your last name" 
                      value={null} />
              </div>
            </div>
          </div>

          <div className="mt-3">
            <label className="text-lg font-normal">User Name</label>
            <div>
              <input onChange={null} 
                    type="text"
                    text={null}
                    className="w-full rounded-xl p-4 mt-1 
                    text-lg 
                    bg-gray-100"
                    name="email" 
                    placeholder="Enter your user name" 
                    value={null} />
            </div>
          </div>
          
          <div className="mt-3"> 
            <label className="text-lg font-normal">Email</label>
            <div>
              <input onChange={null} 
                    type="text"
                    text={null}
                    className="w-full rounded-xl p-4 mt-1 
                    text-lg 
                    bg-gray-100"
                    name="email" 
                    placeholder="Enter your email" 
                    value={null} />
            </div>
          </div>
           
          <div className='mt-3'>
            <label className="text-lg font-normal">Password</label>
            <input onChange={null} 
                  type="password"
                  text={null} 
                  className="w-full rounded-xl p-4 mt-1 
                  text-lg
                  bg-gray-100"
                  name="password" 
                  placeholder="Enter your assword" 
                  value={null} />
          </div>
          
          <div className='mt-3 flex justify-between items-center'>
            <div>
                <input type="checkbox" id="remember"/>
                <label className="justify-center items-center ml-2 
                      font-normal text-base" 
                      for="remember">I agree to all Terms, Privacy and Fees</label>
            </div>
          </div>

          <div className='mt-4 flex flex-col gap-y-2'>
            <button onClick={null}
                    className="py-3 rounded-xl bg-orange-400 
                    text-xl text-white font-bold
                    hover:bg-orange-500
                    active:scale-[.98] active:duration-75 transition-all">
              Sign Up
            </button>
            <h2 className='my-2 text-center font-medium text-base'>Or sign in with</h2>
            
            <div className='flex'>
              <button 
                className='flex w-1/3 ml-3 content-center items-center justify-center 
                border-2 border-gray-200 py-3 rounded-xl 
                bg-white text-black font-normal
                hover:bg-gray-100
                active:scale-[.98] active:duration-75 transition-all '>  
                <img src={googleLogo}/>
              </button>
              <button
                  className='flex w-1/3 ml-3 content-center items-center justify-center 
                  border-2 border-gray-200 py-3 rounded-xl 
                  bg-white text-black font-normal
                  hover:bg-gray-100
                  active:scale-[.98] active:duration-75 transition-all '>   
                  <img src={facebookLogo}/>
              </button>
              <button
                  className='flex w-1/3 ml-3 content-center items-center justify-center 
                  border-2 border-gray-200 py-3 rounded-xl 
                  bg-white text-black font-normal
                  hover:bg-gray-100
                  active:scale-[.98] active:duration-75 transition-all '>  
                  <img src={appleLogo}/>
              </button>
              <button
                  className='flex w-1/3 ml-3 content-center items-center justify-center 
                  border-2 border-gray-200 py-3 rounded-xl 
                  bg-white text-black font-normal
                  hover:bg-gray-100
                  active:scale-[.98] active:duration-75 transition-all '>  
                  <img src={githubLogo}/>
              </button>
            </div>

            <div className='flex content-center items-center justify-center'>
              <div className='font-normal text-base'>
                Already have an account?
              </div>
              <button 
                  className='ml-2 font-bold text-base text-orange-400
                  hover:text-orange-500
                  active:scale-[.98] active:duration-75 transition-all'>
                  Sign In
              </button>
            </div>
          </div>  

        </form>
      </div>
    </div>
  );
}

export default Register;