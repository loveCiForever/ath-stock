
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Branding from '../branding/Branding.jsx';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center w-auto h-32 bg-red-00'>
      <div className='flex flex-col items-center justify-center w-full bg-red-000 mx-72'>
        <hr className="flex w-full h-[1.2px] mb-5 bg-gray-300" />
        <div className='flex my-5'>
          <Branding />

          <button
            className='ml-20 text-gray-500 text-[17px] font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'
            onClick={() => {
              navigate('/help')
            }}
          >Help
          </button>

          <button
            className='ml-20 text-gray-500 text-[17px] font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'
            onClick={() => {
              navigate('/feedback')
            }}
          >Feedback
          </button>

          <button
            className='ml-20 text-gray-500 text-[17px] font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'
            onClick={() => {
              navigate('/policyandclause')
            }}
          >Policy & Clause
          </button>

          <button
            className='ml-20 text-gray-500 text-[17px] font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'
            onClick={() => {
              navigate('/aboutus')
            }}
          >About Us
          </button>

          <button
            className='ml-20 text-gray-500 text-[17px] font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'
            onClick={() => {
              navigate('/donate')
            }}
          >
            Donate
          </button>

        </div>
        
      </div>
    </div>
  );
}