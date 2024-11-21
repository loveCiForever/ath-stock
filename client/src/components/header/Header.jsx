import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Branding from "./Branding";
import SearchBarHead from "./SearchBarHead.jsx";

import HamburgerIcon from '../../assets/icon/hamburgerIcon.svg';
import EmailUnRead from '../../assets/icon/emailUnRead.png';
// import notificationIcon from '../../assets/icon/notificationIcon.png';

import userPicture from '../../assets/picture/userPicture.jpg';

const Header = ({toggleSideBar}) => {
  const[isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      console.log("isScrolled:", window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header 
      className={`sticky top-0 z-10 h-[65px] pr-[20px] bg-white border-b border-gray-100 flex justify-between items-center mx-auto w-full px-2 transition-shadow duration-300 ${isScrolled ? "shadow-md shadow-gray-400" : ""}`}
    >

      {/* cụm hamburger + logo */}
      <div className="flex items-center">
        <button 
          className="p-3 hover:rounded-full hover:bg-gray-200 shadow-gray-400 active:scale-[.90] active:duration-75 transition-all"
          onClick={toggleSideBar}
        >
          <img 
            src={HamburgerIcon} 
            alt="Hamburger" 
            className='w-4 h-4'
          />
        </button>
        <Branding />
      </div>

      {/* Cụm searchbar */}
      {/* <SearchBarHead 
        className={`${isScrolled ? "hidden" : ""} `}
      /> */}
      {!isScrolled ? <SearchBarHead /> : <div></div>}
    
      {/* Cụm noti + profile */}
      <div className="flex items-center ">
        <button className="p-2 hover:rounded-full hover:bg-gray-200 shadow-gray-400 active:scale-[.90] active:duration-75 transition-all">
            <img 
              src={EmailUnRead} 
              className="w-6 opacity-70"
              alt="Notification" />
        </button>

        {/* Sau cập nhật class user:  
        - signed-> user avatar, click vào tùy chỉnh profile 
        - ngược lại để avatar khách, click vào có tùy chọn login hoặc signup */}
        <div className="box-border flex flex-col items-center justify-center ml-4 border-4 border-orange-300 rounded-full">
          <img 
            src={userPicture} 
            alt="User avatar" 
            className="rounded-full w-9"
            style={{boxSizing: 'border-box'}}
          />
        </div>
      </div>


    </header>
  );
};
  
export default Header;