import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoIcon from '../../assets/icon/infoIcon.png';
import MayBeYouCareCard from './MayBeYouCareCard.jsx';
import MayBeYouCareCards from './MayBeYouCareCards.jsx';

const MayBeYouCare = () => {

  return (
    <div className='flex flex-col items-center justify-center w-[650px]'>
      <div className="flex items-center justify-start w-full mb-4">
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
      <MayBeYouCareCards/>
    </div>
  );
}

export default MayBeYouCare;