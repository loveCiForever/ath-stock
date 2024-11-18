import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/header/Header.jsx';
// import Footer from '../components/footer/Footer.jsx';
// import SideBar from '../components/sidebar/SideBar.jsx';
// import SearchBar from '../components/searchBar/SearchBar.jsx';

// import Markets from '../components/marketSection/Markets.jsx';
// import MainSection from '../components/mainSection/MainSection.jsx';

const HomePage = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  // const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  // const toggleSideBar = () => {
  //   setIsSideBarOpen(!isSideBarOpen);
  // }

  return (
    <>
      {/* <Header toggleSideBar={toggleSideBar} /> */}
      <Header />
      {/* isSideBarOpen true thì render SideBar và ngược lại */}
      {/* {isSideBarOpen && <SideBar toggleSideBar={toggleSideBar} />} 

      <div className="flex flex-col items-center"><Markets /></div>
      <SearchBar />
      <MainSection /> */}
      <div className="flex items-center justify-center w-full h-screen text-6xl font-bold bg-red-000">
        Home Page
      </div>
    </>
  );
}

export default HomePage;