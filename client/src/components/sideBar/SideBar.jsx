import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Branding from '../header/Branding';

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

  const closeBar = () => toggleSideBar(false);

  return (
    <aside
      ref={sidebarRef}
      className="fixed inset-0 z-0 mt-[0px] flex transition ease-in-out"
    >
      <div className="w-64 bg-white shadow-xl relative pr-[10px]">
        <nav className="mt-[80px]">
          <div className="flex flex-col text-[14px] tracking-wide pr-[30px] mb-[20px]">
            <button
              className={`flex items-center mt-2 py-2 pl-6 text-black-700 bg-orange-000 hover:bg-orange-100 rounded-r-full ${window.location.pathname === '/' ? 'bg-orange-300 hover:bg-orange-300' : 'bg-orange-000'}`}
              onClick={() => {
                navigate('/');
                console.log("Home button click, navigate to home page")
              }}
            >
              <img src={HomeIcon} className="w-6" alt="Home" />
              <span className="pl-[14px] pb-[1px]">Home</span>
            </button>
            <button
              className={`flex items-center mt-2 py-2 pl-6 text-black-700 bg-orange-000 hover:bg-orange-100 rounded-r-full ${window.location.pathname === '/markettrend' ? 'bg-orange-300 hover:bg-orange-300' : 'bg-orange-000'}`}
              onClick={() => {
                navigate('/markettrend');
                console.log("Market trend button click, navigate to market trend page")
              }}
            >
              <img
                src={MarketTrendIcon}
                className="w-6 h-6"
                alt="Market Trends"
              />
              <span className="pl-[14px]">Market Trends</span>
            </button>
            <button
              className={`flex items-center mt-2 py-2 pl-6 text-black-700 bg-orange-000 hover:bg-orange-100 rounded-r-full ${window.location.pathname === '/community' ? 'bg-orange-300 hover:bg-orange-300' : 'bg-orange-000'}`}
              onClick={() => {
                navigate('/community');
                console.log("Community button click, navigate to Community page")
              }}
            >
              <img
                src={CommunityIcon}
                className="w-6 h-6"
                alt="Market Trends"
              />
              <span className="pl-[14px]">Community</span>
            </button>
            <button
              className={`flex items-center mt-2 py-2 pl-6 text-black-700 bg-orange-000 hover:bg-orange-100 rounded-r-full ${window.location.pathname === '/userguide' ? 'bg-orange-300 hover:bg-orange-300' : 'bg-orange-000'}`}
              onClick={() => {
                navigate('/userguide');
                console.log("User guide button click, navigate to user guide page")
              }}
            >
              <img
                src={UserGuideIcon}
                className="w-6 h-6"
                alt="Market Trends"
              />
              <span className="pl-[14px]">User Guide</span>
            </button>
          </div>
          <div className="border-b border-gray-200 my-[10px]"></div>

          <div className="flex flex-col uppercase text-gray-600 text-[11px] font-medium ml-6 mr-[8px]">
            <div className="flex items-center justify-between">
              <a 
                href="#" 
                rel="noopener noreferrer">
                Portfolios
              </a>
              <div className="flex items-center p-2 ml-1 rounded-full hover:bg-gray-100 shadow-gray-400">
                <img 
                  src={PlusIcon} 
                  className="h-[26px] w-[26px]" 
                  alt="Add" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <a 
                href="#" 
                rel="noopener noreferrer">
                Watchlists
              </a>
              <div className="flex items-center p-2 ml-1 rounded-full hover:bg-gray-100 shadow-gray-400">
                <img 
                  src={PlusIcon} 
                  className="h-[26px] w-[26px]" 
                  alt="Add" />
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 my-[10px]"></div>

          <a
            href="#"
            className="uppercase text-gray-700 tracking-wider text-[11px] space-y-[6px] pt-[10px] ml-6"
            rel="noopener noreferrer"
          >
            Most Active
          </a>
          <div className="mt-[12px] text-[14px]">
            <a className="flex items-center py-3 pl-6 rounded-r-full hover:bg-gray-100">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img 
                  src={UpArrowIcon} 
                  className="w-4 h-4"
                  alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="pr-2 text-green-700">+1.11%</span>
            </a>
            <a className="flex items-center py-3 pl-6 rounded-r-full hover:bg-gray-100">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img 
                  src={UpArrowIcon} 
                  className="w-4 h-4" 
                  alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="pr-2 text-green-700">+1.11%</span>
            </a>
            <a className="flex items-center py-3 pl-6 rounded-r-full hover:bg-gray-100">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img 
                  src={UpArrowIcon} 
                  className="w-4 h-4" 
                  alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="pr-2 text-green-700">+1.11%</span>
            </a>
            <a className="flex items-center py-3 pl-6 rounded-r-full hover:bg-gray-100">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img 
                  src={UpArrowIcon} 
                  className="w-4 h-4" 
                  alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="pr-2 text-green-700">+1.11%</span>
            </a>
            <a className="flex items-center py-3 pl-6 rounded-r-full hover:bg-gray-100">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img 
                  src={UpArrowIcon} 
                  className="w-4 h-4" 
                  alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="pr-2 text-green-700">+1.11%</span>
            </a>
          </div>
          <div className="absolute bottom-[18px] pt-[10px] border-t w-full mr-[10px] text-[14px]">
            <button className="flex items-center mt-2 py-2 pr-[104px] pl-6 text-black-700 bg-orange-000 hover:bg-orange-100 rounded-r-full">
              <img 
                src={SettingIcon} 
                className="w-6 h-6" 
                alt="Market Trends" />
              <span className="pl-[14px] pb-[1px] font-semibold">Settings</span>
            </button>
            <button 
              className={`flex items-center mt-2 py-2 pr-[60px] pl-6 text-black-700 bg-orange-000 hover:bg-orange-100 rounded-r-full ${window.location.pathname === '/feedback' ? 'bg-orange-300 hover:bg-orange-300' : 'bg-orange-000'}`}
              onClick={() => {
                navigate('/feedback');
                console.log("Send feedback clicked, navigate to Feedback page")
              }}
            >
              <img 
                src={FeedBackIcon} 
                className="w-6 h-6" 
                alt="Market Trends" />
              <span className="pl-[14px] pb-[3px] font-semibold">Send Feedback</span>
            </button>
          </div>
        </nav>
      </div>

    </aside>
  );
};

export default SideBar;