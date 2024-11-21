import React, { useState, useEffect } from 'react';

import LoginPicture from '../assets/picture/loginPicture.png';
import SignInForm from '../components/signInForm/SignInForm.jsx'


const SignInPage = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    document.title = "Sign In";
  }, []);

  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-100 min-w-960'>
      <div className="flex items-center justify-center w-auto bg-white shadow-2xl rounded-3xl px-[30px] py-[30px]"> 
        <img 
          src={LoginPicture} 
          alt="Login Picture"
          className="opacity-90 max-w-[500px] ml-[30px] mr-[50px] rounded-xl ///motion-reduce:animate-pulse "
        />
        <SignInForm setToken={setToken}/>
      </div>
    </div>
  );
}

export default SignInPage;