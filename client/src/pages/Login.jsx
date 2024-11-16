import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import loginPicture from '../assets/picture/loginPicture.png'

import RegisterFrom from "../components/registerForm/RegisterForm.jsx";
import LoginForm from "../components/loginForm/LoginForm.jsx";

const Login = (props) => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    document.title = "Sign In";
  }, []);

  return (
    <div className="flex items-center justify-center w-2/3 bg-white shadow-2xl rounded-xl px-30px py-30px"> 
      <img src={loginPicture} className='opacity-70 max-w-500px ml-30px mr-50px rounded-xl ///motion-reduce:animate-pulse ' /> 
      {/* <div className="mx-4 border-l border-gray-300 h-400px"></div> */}
      <LoginForm className="w-full" setToken={setToken}/>
    </div>
  );
}

export default Login;