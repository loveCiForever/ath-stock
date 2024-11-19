import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import SideBar from '../components/sideBar/SideBar.jsx';


const AboutUsPage = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-w-[1450px]'>
      <Header toggleSideBar={toggleSideBar} />
      {/* isSideBarOpen true thì render SideBar và ngược lại */}
      {isSideBarOpen && <SideBar toggleSideBar={toggleSideBar} />}

      {/* <div className="flex flex-col items-center"><Markets /></div> */}
      {/* <SearchBar /> */}
      {/* <MainSection /> */}
      <div className="flex items-center justify-center w-full h-screen text-6xl font-bold bg-red-000">
        About Us Page
      </div>

      <Footer/>
    </div>
  );
}

export default AboutUsPage;