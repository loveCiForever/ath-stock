
import * as React from 'react';

import athStockLogo from '../../assets/logo/athStockLogo.png';


export default function Footer() {
  return(
    <div className='flex items-center justify-center w-auto h-32 bg-red-00'>

      <div className='flex flex-col items-center justify-center w-full bg-red-000 mx-72'>
        <hr className="flex w-full h-[1.2px] mb-5 bg-gray-300"/>
        <div className='flex my-5'>
          <button className='max-w-24 justify-center items-center active:scale-[.98] active:duration-75 transition-all'>
            <img src={athStockLogo} alt="Logo" />
          </button>
          <button className='ml-20 text-gray-500 text-[17px] font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'>
            Help
          </button>
          <button className='ml-20 text-gray-500 text-[17px] font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'>
            Feedback
          </button>
          <button className='ml-20 text-gray-500 text-[17px] font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'>
            Policy & Clause
          </button>   
          <button className='ml-20 text-gray-500 text-[17px] font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'>
            About Us
          </button>    
          <button className='ml-20 text-gray-500 text-[17px] font-500 hover:text-gray-900 hover:shadow-xs active:scale-[.98] active:duration-75 transition-all'>
            Donate
          </button>       
        </div>    
      </div>
    </div>
  );
}