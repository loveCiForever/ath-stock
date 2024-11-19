import React, { useEffect, useRef} from 'react';

import Branding from '../header/Branding';

import HamburgerIcon from '../../assets/icon/hamburgerIcon.svg';
import HomeIcon from '../../assets/icon/homeIcon.png';
import MarketTrendIcon from '../../assets/icon/MarketTrendIcon.png';
import CommunityIcon from '../../assets/icon/communityIcon.png';
import UserGuideIcon from '../../assets/icon/userGuideIcon.png';
import PlusIcon from '../../assets/icon/plusIcon.png';
import UpArrowIcon from  '../../assets/icon/upArrowIcon.png';
import SettingIcon from '../../assets/icon/settingIcon.png';
import FeedBackIcon from '../../assets/icon/feedbackIcon.png';
import CloseIcon from '../../assets/icon/closeIcon.png';

import OutSideOfSideBarClick from './OutSideOfSideBarClick';

const SideBar = ({ toggleSideBar }) => {
  const sidebarRef = useRef(null);
  // const sideBarOutSideClick = OutSideOfSideBarClick(sidebarRef);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ((sidebarRef.current && !sidebarRef.current.contains(event.target))) {
        console.log("Click outside detected");
        toggleSideBar(false);
      }
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
      className="fixed inset-0 z-50 flex transition ease-in-out"
    >
      <div className="w-64 bg-white shadow-xl relative pr-[10px]">
        {/* {sideBarOutSideClick ? {closeBar} : null} */}
        {/* {sideBarOutSideClick && closeBar()} */}
        <div className='flex items-center justify-center'>
          <div className="mt-[20px] mr-[32px] text-2xl font-bold font-inter">
            {/* <Branding /> */}
            athStock .NET
            
          </div>
        </div>
        

        <nav className="mt-6">
          <div className="flex flex-col text-[14px] tracking-wide pr-[30px]">
            <a className="flex items-center py-2 pl-6 text-black-700 bg-orange-300 rounded-r-full bg-opacity-100">
              <img src={HomeIcon} className="w-6" alt="Home" />
              <span className="pl-[14px] pb-[1px]">Home</span>
            </a>
            <a className="flex items-center py-2 pl-6 rounded-r-full bg-orange-000 hover:bg-orange-100 mt-2">
              <img
                src={MarketTrendIcon}
                className="w-6 h-6"
                alt="Market Trends"
              />
              <span className="pl-[14px]">Market Trends</span>
            </a>
            <a className="flex items-center py-2 pl-6 rounded-r-full bg-orange-000 hover:bg-orange-100 mt-2">
              <img
                src={CommunityIcon}
                className="w-6 h-6"
                alt="Market Trends"
              />
              <span className="pl-[14px]">Community</span>
            </a>
            <a className="flex items-center py-2 pl-6 rounded-r-full bg-orange-000 hover:bg-orange-100 mt-2">
              <img
                src={UserGuideIcon}
                className="w-6 h-6"
                alt="Market Trends"
              />
              <span className="pl-[14px]">User Guide</span>
            </a>
          </div>
          <div className="border-b border-gray-200 my-[10px]"></div>

          <div className="flex flex-col uppercase text-gray-600 text-[11px] font-medium ml-6 mr-[8px]">
            <div className="flex items-center justify-between">
              <a href="#" rel="noopener noreferrer">
                Portfolios
              </a>
              <div className="flex items-center p-2 ml-1 rounded-full hover:bg-gray-100 shadow-gray-400">
                <img src={PlusIcon} className="h-[26px] w-[26px]" alt="Add" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <a href="#" rel="noopener noreferrer">
                Watchlists
              </a>
              <div className="flex items-center p-2 ml-1 rounded-full hover:bg-gray-100 shadow-gray-400">
                <img src={PlusIcon} className="h-[26px] w-[26px]" alt="Add" />
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
                <img src={UpArrowIcon} className="w-4 h-4" alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="pr-2 text-green-700">+1.11%</span>
            </a>
            <a className="flex items-center py-3 pl-6 rounded-r-full hover:bg-gray-100">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img src={UpArrowIcon} className="w-4 h-4" alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="pr-2 text-green-700">+1.11%</span>
            </a>
            <a className="flex items-center py-3 pl-6 rounded-r-full hover:bg-gray-100">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img src={UpArrowIcon} className="w-4 h-4" alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="pr-2 text-green-700">+1.11%</span>
            </a>
            <a className="flex items-center py-3 pl-6 rounded-r-full hover:bg-gray-100">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img src={UpArrowIcon} className="w-4 h-4" alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="pr-2 text-green-700">+1.11%</span>
            </a>
            <a className="flex items-center py-3 pl-6 rounded-r-full hover:bg-gray-100">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img src={UpArrowIcon} className="w-4 h-4" alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="pr-2 text-green-700">+1.11%</span>
            </a>
          </div>
          <div className="absolute bottom-[18px] pt-[10px] border-t w-full mr-[10px] text-[14px]">
            <a className="flex items-center py-3 pl-6 rounded-r-full hover:bg-gray-100">
              <img src={SettingIcon} className="w-6 h-6" alt="Market Trends" />
              <span className="pl-[14px] pb-[1px] font-semibold">Settings</span>
            </a>
            <a className="flex items-center py-3 pl-6 rounded-r-full hover:bg-gray-100">
              <img src={FeedBackIcon} className="w-6 h-6" alt="Market Trends" />
              <span className="pl-[14px] pb-[3px] font-semibold">Send Feedback</span>
            </a>
          </div>
        </nav>
      </div>

      <div className='mt-[16px]'>
        <button 
          onClick={() => {
            console.log("Close button clicked");
            closeBar();
          }}
          className=' bg-orange-100 hover:bg-orange-300 rounded-tr-full rounded-br-full flex items-center justify-center pl-2 pr-3 py-2 active:scale-[.90] active:duration-75 transition-all'
        >
          <img 
            src={CloseIcon} 
            alt="close"
            className='w-4' />
        </button>
      </div>

    </aside>
  );
};

export default SideBar;