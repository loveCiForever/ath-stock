
import * as React from 'react';
import { useState } from 'react';
import { useEffect} from 'react';
import axios from "axios";

import menuIcon from '../assets/menuIcon.svg';
import notificationIcon from '../assets/notificationIcon4.svg';
import userIcon from '../assets/userIcon.svg';
import userPicture from '../assets/userPicture.jpg';
import athStockLogo from '../assets/athStockLogo.png';



export default function Header() {
  return(
    <div className='flex justify-between w-full h-20 bg-gray-000 header'>
      
      <div className='flex items-center justify-center ml-5'>
        <button className='p-3 rounded-full hover:bg-gray-200 active:scale-[.98] active:duration-75 transition-all'>
          <img src={menuIcon} className='max-w-5 ' />
        </button>
         
        <button className="active:scale-[.98] active:duration-75 transition-all">
          <img src={athStockLogo} className='ml-4 max-w-28' />
        </button>
      </div>  
      
      <div className='flex items-center justify-center mr-6 active:scale-[.98] active:duration-75 transition-all'> 
        <button className='p-2 rounded-full hover:bg-gray-200 active:scale-[.98] active:duration-75 transition-all'>
          <img src={notificationIcon} className='max-w-6' />
        </button>
        
        <button className='ml-5 rounded-full border-1px active:scale-[.98] active:duration-75 transition-all'>
          <img src={userPicture} className='rounded-full max-w-9' />
        </button> 
         
      </div>  
    </div>
  );
}