import React from 'react';
import { Link } from 'react-router-dom';
import athStockLogo from '../../assets/logo/athStockLogo.png'

const Branding = () => {
  return (
    <div className='flex items-center'>
      {" "}
      <Link to='/' className='flex'>
        <img 
            alt='Logo'
            className='w-[75px] h-[25px] mr-[4px] mt-[6px]'
            src={athStockLogo}
        />
      </Link>
    </div>
  )
}

export default Branding;