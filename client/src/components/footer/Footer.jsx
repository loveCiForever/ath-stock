
import * as React from 'react';
import { useState } from 'react';
import { useEffect} from 'react';
import axios from "axios";

import notificationIcon from '../../assets/icon/notificationIcon.svg';
import userPicture from '../../assets/picture/userPicture.jpg';
import athStockLogo from '../../assets/logo/athStockLogo.png';



export default function Footer() {
  return(
    <div className='flex items-center justify-center w-full h-20 footer'>

      <div className='flex flex-col items-center justify-center w-full mx-72 bg-red-000'>
        <hr className="flex w-full h-1.2px bg-gray-300"/>
        <div className='my-5 flex'>
          <button className='max-w-24 justify-center items-center active:scale-[.98] active:duration-75 transition-all'>
            <img src={athStockLogo} alt="Logo" />
          </button>
          <button className='help ml-16 text-gray-500 text-17px font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'>
            Help
          </button>
          <button className='send-feedback ml-16 text-gray-500 text-17px font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'>
            Send Feedback
          </button>
          <button className='privacy ml-16 text-gray-500 text-17px font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'>
            Privacy
          </button>
          <button className='clause ml-16 text-gray-500 text-17px font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'>
            Clause
          </button>
          <button className='disclaimer ml-16 text-gray-500 text-17px font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'>
            Disclaimer
          </button>      
          <button className='about-us ml-16 text-gray-500 text-17px font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'>
            About Us
          </button>    
          <button className='about-us ml-16 text-gray-500 text-17px font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'>
            Donate
          </button>       
        </div>
        
      </div>

    </div>
  );
}