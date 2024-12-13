import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import SideBar from '../components/sideBar/SideBar.jsx';


const CommunityPage = () => {
  useEffect(() => {
    document.title = "Community";
  }, []);

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <div className='flex flex-col items-center min-w-full min-h-screen justify-center// bg-yellow-00'>
      <Header toggleSideBar={toggleSideBar} />
      {/* isSideBarOpen true thì render SideBar và ngược lại */}
      {isSideBarOpen && <SideBar toggleSideBar={toggleSideBar} />}

      <div className="flex w-[1000px] h-screen">
        Community Page
      </div>

      <Footer/>
    </div>
  );
}

export default CommunityPage;