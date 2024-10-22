import * as React from 'react';
import { useState } from 'react';
import { useEffect} from 'react';
import axios from "axios";

import athStockLogo from '../assets/athStockLogo.png'
import loginPicture from '../assets/login-picture.png'

import LoginForm from "../components/LoginForm";

export default function Login() {
  useEffect(() => {
    document.title = "Sign In";
  }, []);

  return (
    <div className="flex items-center justify-center w-auto bg-white rounded-xl px-30px py-30px">
      <img src={loginPicture} className='max-w-480px ml-30px mr-50px rounded-xl' />
      {/* <div className="mx-4 border-l border-gray-300 h-400px"></div> */}
      <LoginForm className="w-1/2 lg:w-1/2"/>
    </div>
  );

}