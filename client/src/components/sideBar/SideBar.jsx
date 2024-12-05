import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Branding from '../branding/Branding.jsx';
import Hamburger from '../header/Hamburger.jsx';
import HamburgerIcon from '../../assets/icon/hamburgerIcon.svg';
import HomeIcon from '../../assets/icon/homeIcon.png';
import MarketTrendIcon from '../../assets/icon/MarketTrendIcon.png';
import CommunityIcon from '../../assets/icon/communityIcon.png';
import UserGuideIcon from '../../assets/icon/userGuideIcon.png';
import PlusIcon from '../../assets/icon/plusIcon.png';
import UpArrowIcon from '../../assets/icon/upArrowIcon.png';
import SettingIcon from '../../assets/icon/settingIcon.png';
import FeedBackIcon from '../../assets/icon/feedbackIcon.png';
import CloseIcon from '../../assets/icon/closeIcon.png';

const SideBar = ({ toggleSideBar }) => {
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      (!sidebarRef.current && sidebarRef.current.contains(event.target)) ? (toggleSideBar(false)) : (null)
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSideBar]);

  return (
    <div
      ref={sidebarRef}
      className="fixed inset-0 flex transition ease-in-out"
    >
      <nav className="relative z-10 bg-white shadow-xl w-60">

        <div className="flex h-[65px] sticky items-center justify-start">
          <div className="ml-4 bg-red-00 ">
            <Hamburger toggleSideBar={toggleSideBar} />
          </div>

          <div className="ml-4 bg-red-00 ">
            <Branding />
          </div>
        </div>

        <div className="flex flex-col text-[13px] tracking-wider pr-[30px] mb-[20px]">

          <button
            className={`flex items-center mt-2 py-2 pl-7 text-black-700 bg-orange-000 hover:bg-orange-100 rounded-r-full ${window.location.pathname === '/' ?
              'bg-orange-300 hover:bg-orange-300'
              :
              'bg-orange-000'}
                `}
            onClick={() => {
              navigate('/');
              // console.log("Home button click, navigate to home page")
            }}
          >
            <img
              src={HomeIcon}
              className="w-5"
              alt="Home" />
            <span className="pl-[14px] pb-[1px]">Home</span>
          </button>


          <button
            className={`flex items-center mt-2 py-2 pl-7 text-black-700 bg-orange-000 hover:bg-orange-100 rounded-r-full ${window.location.pathname === '/markettrend' ? 
              'bg-orange-300 hover:bg-orange-300' 
              : 
              'bg-orange-000'}
              `}
            onClick={() => {
              navigate('/markettrend');
              // console.log("Market trend button click, navigate to market trend page")
            }}
          >
            <img
              src={MarketTrendIcon}
              className="w-5"
              alt="Market Trends"
            />
            <span className="pl-[14px] pb-[1px]">Market Trends</span>
          </button>


          <button
            className={`flex items-center mt-2 py-2 pl-7 text-black-700 bg-orange-000 hover:bg-orange-100 rounded-r-full ${window.location.pathname === '/community' ? 
              'bg-orange-300 hover:bg-orange-300' 
              : 
              'bg-orange-000'}
              `}
            onClick={() => {
              navigate('/community');
              // console.log("Community button click, navigate to Community page")
            }}
          >
            <img
              src={CommunityIcon}
              className="w-5"
              alt="Market Trends"
            />
            <span className="pl-[14px] pb-[1px]">Community</span>
          </button>
          <button
            className={`flex items-center mt-2 py-2 pl-7 text-black-700 bg-orange-000 hover:bg-orange-100 rounded-r-full ${window.location.pathname === '/userguide' ?
               'bg-orange-300 hover:bg-orange-300' 
               : 
               'bg-orange-000'}
               `}
            onClick={() => {
              navigate('/userguide');
              // console.log("User guide button click, navigate to user guide page")
            }}
          >
            <img
              src={UserGuideIcon}
              className="w-5"
              alt="Market Trends"
            />
            <span className="pl-[14px] pb-[1px]">User Guide</span>
          </button>
        </div>

        <div className="border-b border-gray-200"></div>


        {/* <div className="absolute bottom-[10px] flex flex-col text-[13px] tracking-wider pr-[30px] mb-[13px] border-t border-gray-200">
          <button
            className="flex items-center mt-2 py-2 pr-[104px] pl-7 text-black-700 bg-orange-000 hover:bg-orange-100 rounded-r-full"
          >
            <img
              src={SettingIcon}
              className="w-5"
              alt="Market Trends" />
            <span className="pl-[14px] font-medium">Settings</span>
          </button>
          <button
            className={`flex items-center mt-2 py-2 pl-7 text-black-700 bg-orange-000 hover:bg-orange-100 rounded-r-full ${window.location.pathname === '/feedback' ?
              'bg-orange-300 hover:bg-orange-300' 
              : 
              'bg-orange-000'}
              `}
            onClick={() => {
              navigate('/feedback');
              // console.log("Send feedback clicked, navigate to Feedback page")
            }}
          >
            <img
              src={FeedBackIcon}
              className="w-5"
              alt="Market Trends" />
            <span className="pl-[14px] pb-[1px]">Send Feedback</span>
          </button>
        </div> */}


      </nav>

    </div>
  );
};

export default SideBar;