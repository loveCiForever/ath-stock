
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Branding from '../branding/Branding.jsx';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className='flex-col pb-10 mt-10 w-[1000px] bg-white'>
      <div className='flex items-center justify-between w-full border-gray-200 pt-11 border-t'>
        <Branding />
        <button
          className='text-gray-500 text-[17px] hover:text-gray-900 hover:shadow-xs hover:text-[20px] hover:font-medium active:scale-[.98] active:duration-75 transition-all bg-blue-00'
          onClick={() => {
            navigate('/feedback')
          }}
        >Feedback
        </button>

        <button
          className='text-gray-500 text-[17px] hover:text-gray-900 hover:shadow-xs hover:text-[20px] hover:font-medium active:scale-[.98] active:duration-75 transition-all bg-blue-00'
          onClick={() => {
            navigate('/policyandclause')
          }}
        >Policy & Clause
        </button>

        <button
          className='text-gray-500 text-[17px] hover:text-gray-900 hover:shadow-xs hover:text-[20px] hover:font-medium active:scale-[.98] active:duration-75 transition-all bg-blue-00'
          onClick={() => {
            navigate('/aboutus')
          }}
        >About Us
        </button>

        <button
          className='text-gray-500 text-[17px] hover:text-gray-900 hover:shadow-xs hover:text-[20px] hover:font-medium active:scale-[.98] active:duration-75 transition-all bg-blue-00'
          onClick={() => {
            navigate('/donate')
          }}
        >
          Donate
        </button>

      </div>

    </footer>

  );
}