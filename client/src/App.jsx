
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import StockPage from './pages/StockMarketPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx'
import CommunityPage from './pages/CommunityPage.jsx';
import PolicyAndClausePage from './pages/PolicyAndClausePage.jsx';
import DonatePage from './pages/DonatePage.jsx';
import FeedBackPage from './pages/FeedBackPage.jsx';
import HelpPage from './pages/HelpPage.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/stock" element={<StockPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/community" element={<CommunityPage/>} />
        <Route path="/policyandclause" element={<PolicyAndClausePage/>} />
        <Route path="/donate" element={<DonatePage/>} />
        <Route path="/feedback" element={<FeedBackPage/>} />
        <Route path="/help" element={<HelpPage/>} />
      </Routes>
    </Router>
  )
}

export default App
