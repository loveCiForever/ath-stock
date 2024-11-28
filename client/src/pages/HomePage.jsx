import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import SideBar from '../components/sideBar/SideBar.jsx';
import SearchBar from '../components/searchBar/SearchBar.jsx';
import Market from '../components/market/Market.jsx';

// import MainSection from '../components/mainSection/MainSection.jsx';

const HomePage = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-[1450px] bg-gray-50'>

      <Header toggleSideBar={toggleSideBar} />

      {isSideBarOpen ? <SideBar toggleSideBar={toggleSideBar}/> : ''}
      <div className='flex flex-col items-center'>
        <Market />
      </div>
      <SearchBar />

      <div className="flex items-center justify-center w-full h-screen text-6xl font-bold bg-red-000">
        Home Page
      </div>

      <Footer/>
    </div>
  );
}

export default HomePage;