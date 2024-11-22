import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Branding from "./Branding";
import SearchBarHead from "./SearchBarHead.jsx";
import Account from './Account.jsx';

import HamburgerIcon from '../../assets/icon/hamburgerIcon.svg';
import EmailUnRead from '../../assets/icon/emailUnRead.png';
import LogInIcon from '../../assets/icon/logInIcon.png';
// import notificationIcon from '../../assets/icon/notificationIcon.png';

import userPicture from '../../assets/picture/userPicture.jpg';

const Header = ({ toggleSideBar }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

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
      className={`sticky top-0 z-20 h-[65px] pr-[20px] bg-white border-b border-gray-100 flex justify-between items-center mx-auto w-full px-2 transition-shadow duration-300 ${isScrolled ? "shadow-md shadow-gray-400" : ""}`}
    >

      {/* cụm hamburger + logo */}
      <div className="flex items-center">
        <button
          className="p-3 hover:rounded-full hover:bg-orange-300 active:scale-[.90] active:duration-75 transition-all"
          onClick={() => {
            console.log("Hamrburger icon clicked")
            toggleSideBar();
          }}
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
      {/* {!isScrolled && !(
        window.location.pathname === '/donate'
        || window.location.pathname === '/help'
        || window.location.pathname === '/feedback'
        || window.location.pathname === '/policyandclause'
        || window.location.pathname === '/aboutus'
        || window.location.pathname === '/userguide'
        || window.location.pathname === '/community'
      ) ? <SearchBarHead /> : <div></div>} */}

      {/* Cụm noti + profile */}
      <div className="flex items-center ">
        <button
          className="p-2 hover:rounded-full hover:bg-orange-300  active:scale-[.90] active:duration-75 transition-all"
          onClick={() => {
            console.log("Notification button clicked")
          }}
        >
          <img
            src={EmailUnRead}
            className="w-6 opacity-100"
            alt="Notification" />
        </button>

        {/* Sau cập nhật class user:  
        - signed-> user avatar, click vào tùy chỉnh profile 
        - ngược lại để avatar khách, click vào có tùy chọn login hoặc signup */}
        {/* <div className="box-border flex flex-col items-center justify-center ml-4 border-4 border-orange-300 rounded-full">
          <img 
            src={userPicture} 
            alt="User avatar" 
            className="rounded-full w-9"
            style={{boxSizing: 'border-box'}}
          />
        </div> */}

        <div className="flex flex-col items-center justify-center ml-[15px]">
          {isSignedIn ? (
            <Account user={user} />
          ) : (
            <div className="">
              <button
                className="flex items-center justify-center rounded-xl px-3 py-1 hover:bg-orange-300 active:scale-[.90] active:duration-75 transition-all"
                onClick={() => {
                  console.log("Sign in button clicked, navigate from homepage to signinpage");
                  navigate('/signin');
                }}
              >
                {/* <img 
                  src={LogInIcon} 
                  alt="login"
                  className="w-6" 
                /> */}
                <p className="ml-[0px] mb-[5px] font-semibold tracking-tight">Sign in</p>
              </button>

            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;