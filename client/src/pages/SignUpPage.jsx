import React, { useState, useEffect } from 'react';

import SignUpForm from '../components/signUpForm/SignUpForm.jsx'

const SignUpPage = () => {
  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-100 min-w-[960px]'>
      <div className='flex items-center justify-center w-2/5 rounded-3xl shadow-2xl px-[30px] py-[20px] bg-white min-w-[500px] max-w-[500px]'>
        <SignUpForm/>
      </div>
    </div>
  );
}

export default SignUpPage;