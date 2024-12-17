import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import SideBar from '../components/sideBar/SideBar.jsx';
import SearchBar from '../components/searchBar/SearchBar.jsx';
import Market from '../components/market/Market.jsx';

import MainSection from '../components/mainSection/MainSection.jsx';
import MayBeYouCare from '../components/mayBeYouCare/MayBeYouCare.jsx';
import FinancialNew from '../components/financialNews/FinancialNew.jsx';
import TopPriceStock from '../components/topPriceStock/topPriceStock.jsx';
import TopActiveStock from '../components/topActiveStock/topActiveStock.jsx';


const HelpPage = () => {
  useEffect(() => {
    document.title = "Help";
  }, []);

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = (isOpen) => {
    setIsSideBarOpen(isOpen);
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.sidebar'); // Add a class to your sidebar for selection
      if (sidebar && !sidebar.contains(event.target) && isSideBarOpen) {
        toggleSideBar(false); // Close the sidebar
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSideBarOpen]);

  return (
    <div className='flex flex-col items-center min-w-full min-h-screen bg-white'>

      <div className='fixed inset-x-0 min-w-[1000px] bg-red-00 w-full'>
        <Header toggleSideBar={() => toggleSideBar(!isSideBarOpen)} />
        {isSideBarOpen && <SideBar toggleSideBar={toggleSideBar} />}
      </div>






      <div className='flex items-center justify-center w-auto mt-20'>
        <Market />
      </div>

      <SearchBar />

      <div className='flex w-[1000px]'>
        <div className='flex-col'>
          <div className='flex items-stretch justify-center bg-red mt-[20px] h-auto//'>
            <MayBeYouCare />
          </div>
          <div className='flex mt-10 mb-32 bg-red-00'>
            <FinancialNew />
          </div>
        </div>

        <div className='w-[350px] h-auto ml-6 my-[20px] bg-red-000'>
          <TopPriceStock />
          <div className='my-6'></div>
          <TopActiveStock />
        </div>
      </div>

      <div className='w-full flex items-center justify-center'>
        <Footer />
      </div>

    </div>
  );
}

export default HelpPage;