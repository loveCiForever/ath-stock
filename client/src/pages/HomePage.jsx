import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import SideBar from '../components/sidebar/SideBar.jsx';
import SearchBar from '../components/searchBar/SearchBar.jsx';

import Markets from '../components/marketSection/Markets.jsx';
import MainSection from '../components/mainSection/MainSection.jsx';

const HomePage = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen text-6xl font-bold bg-red-200">
      Home Page
    </div>
  );
}

export default HomePage;