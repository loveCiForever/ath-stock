
import * as React from 'react';
import { useState } from 'react';
import { useEffect} from 'react';
import axios from "axios";

import appleLogo from '../assets/apple.svg';
import facebookLogo from '../assets/facebook.svg';
import googleLogo from '../assets/google.svg';
import githubLogo from '../assets/github.svg';

export default function RegisterForm(props) {


  return (
    <div className="w-full px-10 py-20 bg-white shadow-xl rounded-3xl">
      <h1 className="text-3xl font-medium tracking-widest text-center">Sign Up For Free</h1>
      <div className="mt-8">
        <form className="flex flex-col">

          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <label className="text-lg font-normal">First Name</label>
              <div>
                <input onChange={null} 
                      type="firstName"
                      text={null}
                      className="w-full p-4 mt-1 text-lg bg-gray-100 rounded-xl"
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
                      className="w-full p-4 mt-1 text-lg bg-gray-100 rounded-xl"
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
                    className="w-full p-4 mt-1 text-lg bg-gray-100 rounded-xl"
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
                    className="w-full p-4 mt-1 text-lg bg-gray-100 rounded-xl"
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
                  className="w-full p-4 mt-1 text-lg bg-gray-100 rounded-xl"
                  name="password" 
                  placeholder="Enter your assword" 
                  value={null} />
          </div>
          
          <div className='flex items-center justify-between mt-3'>
            <div>
                <input type="checkbox" id="remember"/>
                <label className="items-center justify-center ml-2 text-base font-normal" 
                      for="remember">I agree to all Terms, Privacy and Fees</label>
            </div>
          </div>

          <div className='flex flex-col mt-4 gap-y-2'>
            <button onClick={null}
                    className="py-3 rounded-xl bg-orange-400 
                    text-xl text-white font-bold
                    hover:bg-orange-500
                    active:scale-[.98] active:duration-75 transition-all">
              Sign Up
            </button>
            <h2 className='my-2 text-base font-medium text-center'>Or sign in with</h2>
            
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

            <div className='flex items-center content-center justify-center'>
              <div className='text-base font-normal'>
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
