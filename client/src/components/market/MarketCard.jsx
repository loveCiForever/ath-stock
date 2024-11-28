import React, { useState } from 'react';
import UpArrowIcon from '../../assets/icon/upArrowIcon.png';
import DownArrowIcon from '../../assets/icon/downArrowIcon.png';

const MarketCard = ({ name, percentage, priceChange, currentPrice, isUp }) => {

  return (
    <div className="bg-white border border-gray-200 min-w-[200px] rounded-lg p-2 flex flex-row items-center justify-center">
      <div className={`p-2 rounded-lg bg-opacity-50 ${isUp ? "bg-green-200" : "bg-red-200"} self-center flex justify-center items-center `}>
        <img
          src={isUp ? UpArrowIcon : DownArrowIcon}
          alt={isUp ? "Up Arrow" : "Down Arrow"}
          className="h-4 w-4 opacity-70"
        />
      </div>

      <div className="flex flex-col flex-grow ml-2">
        <div className="flex flex-row items-center justify-between">
          <div className="text-gray-800 font-bold text-xs mr-2">{name}</div>
          <div className={`text-xs ${isUp ? "text-green-700" : "text-red-700"}`}>
            {percentage}%
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="text-gray-600 text-xs">{currentPrice}</div>
          <div className={`text-xs mr-1 ${isUp ? "text-green-600" : "text-red-600"}`}>
            {priceChange}
          </div>
        </div>  
      </div>

    </div>
  );
}

export default MarketCard;