import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import SideBar from '../components/sideBar/SideBar.jsx';

import DonateByMomo from '../assets/picture/donateByMomo.jpg';
import DonateByBank from '../assets/picture/donateByBank.jpg';

const DonatePage = () => {
  useEffect(() => {
    document.title = "Donate";
  }, []);

  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('credit-card')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Donation submitted:', { amount, paymentMethod })
    alert(`Thank you for your donation of $${amount}!`)
  }

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }
  // const toggleSearchBar = (false);
  // console.log(window.location.pathname === '/donate');
  return (
    <div className='flex flex-col items-center justify-center min-w-[1450px] min-h-screen bg-white text-gray-600'>
      <Header toggleSideBar={toggleSideBar} />
      {/* isSideBarOpen true thì render SideBar và ngược lại */}
      {isSideBarOpen && <SideBar toggleSideBar={toggleSideBar}  />}

      {/* <div className="flex flex-col items-center"><Markets /></div> */}
      {/* <SearchBar /> */}
      {/* <MainSection /> */}
      <div className='flex flex-col items-center justify-center flex-grow'>
        {/* <label className='text-3xl font-semibold mb-[10px] font-mono bg-orange-100 px-[95px] py-3 rounded-2xl'>Account owner: Nguyen Quang (Victor) Huy </label>

        <div className='flex bg-orange-100 p-5 mt-[1px] rounded-2xl'>
          <img
            src={DonateByBank}
            alt=""
            className="w-[400px] p-5 bg-orange-100"
          />

          <img
            src={DonateByMomo}
            alt=""
            className="w-[400px] p-5 bg-orange-100 ml-[10px]"
          />
        </div> */}
        <h1 className='text-6xl font-bold tracking-wider'>Donate to athStock</h1>
        <h2 className='text-3xl font-medium text-center mt-[20px]'>
          Your generous contribution will make a significant impact on athStock mission and help us 
        </h2>
        <h2 className='text-3xl font-medium text-center'>
          continue our work towards empowering students through technology.
        </h2>
        
        <div className='flex mt-[50px] justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            {/* <span className='text-xl font-mono font-semibold'>Account owner: Nguyen Quang Huy</span> */}
            <span className='text-xl font-mono font-semibold px-10 py-1 bg-orange-300 rounded-xl mb-[10px]'>TP Bank</span>
            <img 
              src={DonateByBank} 
              alt="" 
              className='w-[350px]'
            />
          </div>

          <h1 className='text-2xl font-semibold font-mono mx-[30px]'>OR</h1>

          <div className='flex flex-col justify-center items-center'>
            {/* <span className='text-xl font-mono font-semibold'>Account owner: Nguyen Quang Huy</span> */}
            <span className='text-xl font-mono font-semibold px-16 py-1 bg-orange-300 rounded-xl mb-[10px]'>Momo</span>
            <img 
              src={DonateByMomo} 
              alt="" 
              className='w-[350px]'
            />
          </div>
          {/* <div>
            <p className='text-2xl font-mono'>Tien Phong Commercial Joint Stock Bank (TP Bank)</p>
            <p className='text-2xl font-mono'>Account owner: Nguyen Quang Huy</p>
            <p className='text-2xl font-mono'>Account ID: 0963 04 08 05</p>
          </div> */}

        </div>

      </div>
      <Footer />
    </div>

  );
};

export default DonatePage;