
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Branding from './Branding.jsx';
import SearchBarHead from './SearchBarHead.jsx';
import Icon from './Icon.jsx';
import SignInButton from './SignInButton.jsx';

// import { getAuth, onAuthStateChanged } from "../auth/firebase.jsx";

import hamburgerIcon from '../../assets/icon/hamburgerIcon.svg';
import notificationIcon from '../../assets/icon/notificationIcon.svg';

import userPicture from '../../assets/picture/userPicture.jpg';


const Header = ({toggleSidebar}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isSignedIn, setIsSignedIn] = useState(false); // Trach login status
  // const [user, setUser] = useState(null); // Track the authenticated user
  const location = useLocation();
  const isStockPage = location.pathname.startsWith("/stock");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return(
    <header
      className={`sticky top-0 z-10 h-[65px] pr-[20px] bg-white border-b border-gray-100 flex justify-between items-center mx-auto w-full px-2 transition-shadow duration-300 ${
        isScrolled ? "shadow-md shadow-gray-300" : ""
      }`}
    >
      <div className='flex items-center'>
        <button
          className="hover:rounded-full hover:bg-gray-100 mr-1 p-3 shadow-gray-400 transition-all duration-150"
          onClick={toggleSidebar}
        >
          <img src={hamburgerIcon} className="ml-1 w-6 h-6" alt="Menu" />
        </button>
        <Branding />
      </div>
      {isStockPage ? <SearchBarHead/> : <div></div>}
      <div className='items-center flex-shrink-0 hidden lg:flex"'>
        <div className="flex flex-col items-center justify-center">
          {/* Conditionally render Icon or SignInButton based on sign-in status */}
          {/* {isSignedIn ? (<Icon user={user} />) : (<SignInButton setIsSignedIn={setIsSignedIn} />)} */}
        </div>
      </div>
    </header>
    // <div className='flex justify-between w-full h-20 bg-gray-000 header'>
      
    //   <div className='flex items-center justify-center ml-5'>
    //     <button className='p-3 rounded-full hover:bg-gray-200 active:scale-[.98] active:duration-75 transition-all'>
    //       <img src={hamburgerIcon} className='max-w-5 ' />
    //     </button>
         
    //     <button className="active:scale-[.98] active:duration-75 transition-all">
    //       <img src={athStockLogo} className='ml-4 max-w-28' />
    //     </button>
    //   </div>  
      
    //   <div className='flex items-center justify-center mr-6 active:scale-[.98] active:duration-75 transition-all'> 
    //     <button className='p-2 rounded-full hover:bg-gray-200 active:scale-[.98] active:duration-75 transition-all'>
    //       <img src={notificationIcon} className='max-w-6' />
    //     </button>
        
    //     <button className='ml-5 rounded-full border-1px active:scale-[.98] active:duration-75 transition-all'>
    //       <img src={userPicture} className='rounded-full max-w-9' />
    //     </button> 
         
    //   </div>  
    // </div>
  );
};

export default Header;