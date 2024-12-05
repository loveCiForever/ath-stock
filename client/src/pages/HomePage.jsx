import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import SideBar from '../components/sideBar/SideBar.jsx';
import SearchBar from '../components/searchBar/SearchBar.jsx';
import Market from '../components/market/Market.jsx';

import MainSection from '../components/mainSection/MainSection.jsx';
import MayBeYouCare from '../components/mayBeYouCare/MayBeYouCare.jsx';
import MayBeYouCares from '../components/mayBeYouCare/MayBeYouCareCards.jsx';

const HomePage = () => {
  useEffect(() => {
    document.title = "Home Page";
    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
  }, []);

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  
  return (
    <div className='flex-col items-center justify-center min-h-screen min-w-[1000px] bg-yellow-000'>

      <div className='fixed inset-x-0 top-0 z-1 min-w-[1000px] bg-red-000'>
        <Header toggleSideBar={toggleSideBar} />
      </div>
    
      {isSideBarOpen ? <SideBar toggleSideBar={toggleSideBar}/> : ''}

      <div className='flex items-center justify-center w-auto mt-20'>
        <Market />
      </div>
      
      <SearchBar />
      
      <div className='flex items-center justify-center bg-red-000'>
        {/* <MainSection /> */}
        <MayBeYouCare/>
      </div>
      
      {/* <MayBeYouCares/> */}
      
      
      <div className='fixed inset-x-0 bottom-0 z-2 flex items-center justify-center px-10 min-w-[800px]'>
        <Footer toggleSideBar={toggleSideBar} />
      </div>
      
    </div>
  );
}

export default HomePage;