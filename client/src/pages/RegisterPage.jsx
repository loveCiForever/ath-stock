import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPicture from '../assets/picture/loginPicture.png';
import LoginForm from '../components/loginForm/LoginForm.jsx'
import RegisterForm from '../components/registerForm/RegisterForm.jsx'

const RegisterPage = () => {
  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-100 min-w-960'>
      <div className="flex items-center justify-center w-3/4 bg-white shadow-2xl rounded-xl px-30px py-30px"> 
        <img src={LoginPicture} className='opacity-90 max-w-650px ml-30px mr-50px rounded-xl ///motion-reduce:animate-pulse ' /> 
        {/* <div className="mx-4 border-l border-gray-300 h-400px"></div> */}
        {/* <RegisterForm className="w-1/2 lg:w-1/2" setToken={setToken}/> */}
      </div>
    </div>
  );
}

export default RegisterPage;