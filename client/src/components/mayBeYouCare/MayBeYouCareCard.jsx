import React, { useState } from 'react';

import InfoIcon from '../../assets/icon/infoIcon.png';
import UpArrowIcon from '../../assets/icon/upArrowIcon.png';
import DownArrowIcon from '../../assets/icon/downArrowIcon.png';
import AddCircle from '../../assets/icon/addCircle.png';
import '../../../src/index.css'

const MayBeYouCareCard = ({ symbol, name, percentage, priceChange, currentPrice, isUp }) => {

  return (
    <div className='flex w-[700px] bg-red-000 h-14 items-center justify-between border-t border-gray-200'>
      <div className='flex'>
        <span className='flex items-center justify-center w-[70px] h-6 px-2 py-1 text-xs font-semibold tracking-widest text-white bg-orange-400 rounded-md'>
          {symbol}
        </span>
        <h1 className='flex items-center justify-center ml-4 text-sm font-semibold tracking-wider text-gray-600'>
          {name}
        </h1>
      </div>

      <div className='flex items-center justify-center'>
        <div className='flex-1 mr-4 font-semibold text-gray-600 text-[16px] '>
          {currentPrice}
        </div>
        <div className={`flex items-center justify-end text-[16px] mr-4 font-semibold tracking-wider w-[100px] bg-red-000 ${priceChange > 0 ? "text-green-700" : "text-red-700"}`}>
          {priceChange} $
        </div>
        <div className={`flex w-[80px] px-2 py-1 rounded-md text-[15px] font-semibold tracking-wider items-center justify-center ${priceChange > 0 ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}>
          {/* {priceChange > 0 ? `+${percentage}` : `-${percentage}`}   */}
          <img
            src={priceChange > 0 ? UpArrowIcon : DownArrowIcon}
            alt={priceChange > 0 ? "Up Arrow" : "Down Arrow"}
            className="w-4 h-4 mr-1 opacity-100"
          />
          {percentage}
        </div>
        <button
          onClick={null}
          className='active:scale-[.90] active:duration-75 transition-all'
        >
          <img
            src={AddCircle}
            alt="add circle"
            className='w-5 ml-4'
          />
        </button>

      </div>



    </div>
  );
}

export default MayBeYouCareCard;