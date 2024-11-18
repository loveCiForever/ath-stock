
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import StockPage from './pages/StockMarketPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx'
import Community from './pages/CommunityPage.jsx';
import Policy from './pages/PolicyPage.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/stock" element={<StockPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/community" element={<Community/>} />
        <Route path="/policy" element={<Policy/>} />
      </Routes>
    </Router>
  )
}

export default App
