import React, { useState } from 'react';

import InfoIcon from '../../assets/icon/infoIcon.png';
import UpArrowIcon from '../../assets/icon/upArrowIcon.png';
import DownArrowIcon from '../../assets/icon/downArrowIcon.png';
import MayBeYouCares from './MayBeYouCares';

const MayBeYouCare = ({ symbol, name, percentage, priceChange, currentPrice, isUp }) => {
  console.log('Props received (Debugging): ', { symbol, name, percentage, priceChange, currentPrice, isUp });

  return (
    <div className='flex flex-col items-center justify-center w-[900px]'>
      {/* Title + description */}
      <div className="flex items-center justify-start w-full">
        <h1 className="text-xl font-medium bg-red-000">May be you care</h1>
        <div className="relative inline-block group">
          <button className="focus:outline-none">
            <img
              src={InfoIcon}
              alt="Info"
              className="w-[17px] mb-[2px] ml-[7px]"
            />
          </button>
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-[30px] w-[200px] p-[10px] bg-white border-[2px] shadow-sm text-gray-700 text-sm rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none tracking-normal font-inter// text-[14px]">
            Hệ thống dựa vào các nội dung tìm kiếm gần đây, các loại chứng khoán bạn theo dõi và các hoạt động khác để tạo ra danh sách này.
          </span>
        </div>
      </div>

      <hr className="w-full h-[1.4px] mb-1 mt-3 bg-gray-300" />
      <div className='flex w-full h-[50px] mt-1 bg-red-000 items-center justify-between'>
        <div className="flex flex-col items-start justify-center">
          <div className='flex items-center justify-center w-auto h-6 px-3 text-xs font-semibold tracking-widest text-white bg-black rounded-md'>
            AMD
          </div>
          <div className='mt-1 text-sm font-normal tracking-wider'>
            Advanced Micro Devices Inc
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='font-semibold text-gray-600'>
            31,2 $
          </div>
          <div className='flex items-center justify-center w-auto bg-red-100 px-[7px] py-[4px] rounded-md ml-[10px]'>
            <img
              src={isUp ? UpArrowIcon : DownArrowIcon}
              alt={isUp ? "Up Arrow" : "Down Arrow"}
              className="w-4 h-4 mr-1 opacity-100"
            />
            <div className={`font-medium ${isUp ? "text-green-700" : "text-red-700"}`}>
              1,2 %
            </div>
          </div>
        </div>
      </div>
      {/* Most followed */}
      {/* <div className='flex-col w-[400px] h-auto bg-red-000 border-2 rounded-xl p-3'>
        <h1 className='flex items-center justify-center text-xl font-medium tracking-wide'>Most followed on athStock</h1>

        <hr className="w-full h-[1.4px] mb-1 mt-3 bg-gray-300" />
        <div className='flex justify-between mt-2'> 
          <div className="flex flex-col items-start justify-center">
            <div className='flex items-center justify-center w-auto h-6 px-3 text-xs font-semibold tracking-widest text-white bg-gray-600 rounded-md'>
              AMD
            </div>
            <div className='mt-1 text-sm font-normal tracking-wider'>
              Advanced Micro Devices Inc
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='font-semibold text-gray-600'>
              117,05 $
            </div>
            <div className='flex items-center justify-center w-auto bg-red-100 px-[7px] py-[4px] rounded-md ml-[10px]'>
              <img
                src={isUp ? UpArrowIcon : DownArrowIcon}
                alt={isUp ? "Up Arrow" : "Down Arrow"}
                className="w-4 h-4 mr-1 opacity-100"
              />
              <div className={`font-medium ${isUp ? "text-green-700" : "text-red-700"}`}>
                0,39 %
              </div>
            </div>
          </div>
        </div>


      </div> */}
    </div>

    // <div>
    //   <h3>{symbol} ({name})</h3>
    //   <p>Current Price: {currentPrice}</p>
    //   <p>Price Change: {priceChange} ({percentage}%)</p>
    //   <p>Status: {isUp ? 'Up' : 'Down'}</p>
    // </div>
  );
}

export default MayBeYouCare;