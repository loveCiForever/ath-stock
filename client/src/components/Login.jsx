
import * as React from 'react';
import { useState } from 'react';
import { useEffect} from 'react';
import axios from "axios";

import appleLogo from '../assets/apple.svg';
import facebookLogo from '../assets/facebook.svg';
import googleLogo from '../assets/google.svg';
import githubLogo from '../assets/github.svg';

function Login(props) {
  useEffect(() => {
    document.title = 'Sign In ';
  }, []);

  const [loginForm, setloginForm] = useState({
    email: "",
    password: ""
  })

  function logMeIn(event) {
    axios({
      method: "POST",
      url:"/token",
      data:{
        email: loginForm.email,
        password: loginForm.password
        }
    })
    .then((response) => {
      props.setToken(response.data.access_token)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })

    setloginForm(({
      email: "",
      password: ""}))

    event.preventDefault()
  }

  function handleChange(event) { 
    const {value, name} = event.target
    setloginForm(prevNote => ({
        ...prevNote, [name]: value})
    )}

  return (
    <div className="w-full bg-white px-10 py-20 rounded-3xl shadow-xl">
      <h1 className="text-5xl font-semibold text-center">Welcome Back</h1>
      <div className="mt-8">
        <form className="login flex flex-col">
          <label className="text-lg font-normal">Email</label>
          <div>
            <input onChange={handleChange} 
                  type="email"
                  text={loginForm.email}
                  className="w-full rounded-xl p-4 mt-1 
                  text-lg
                  bg-gray-100 border-3 border-blue-600
                  focus:border-red-500"
                  name="email" 
                  placeholder="Enter your mail" 
                  value={loginForm.email} />
          </div>
          
          <div className='mt-3'>
            <label className="text-lg font-normal">Password</label>
            <input onChange={handleChange} 
                  type="password"
                  text={loginForm.password} 
                  className="w-full rounded-xl p-4 mt-1 
                  text-lg
                  bg-gray-100"
                  name="password" 
                  placeholder="Enter your assword" 
                  value={loginForm.password} />
          </div>
          
          <div className='mt-3 flex justify-between items-center'>
            <div>
                <input type="checkbox" id="remember"/>
                <label className="justify-center items-center ml-2 
                      font-normal text-base" 
                      for="remember">Remember password</label>
            </div>
            <button className="font-bold text-base text-orange-400
                    hover:text-orange-500
                    0 active:scale-[.98] active:duration-75 transition-all ">
                    Forgot password</button>
          </div>

          <div className='mt-4 flex flex-col gap-y-2'>
            <button onClick={logMeIn}
                    className="py-3 rounded-xl bg-orange-400 
                    text-xl text-white font-bold
                    hover:bg-orange-500
                    active:scale-[.98] active:duration-75 transition-all">
              Sign In
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
                Don't have an account?
              </div>
              <button 
                  className='ml-2 font-bold text-base text-orange-400
                  hover:text-orange-500
                  active:scale-[.98] active:duration-75 transition-all'>
                  Sign Up
              </button>
            </div>
          </div>  

        </form>
      </div>
    </div>
  );
}

export default Login;