
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import MarketTrendPage from './pages/MarketTrendPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx'
import CommunityPage from './pages/CommunityPage.jsx';
import PolicyAndClausePage from './pages/PolicyAndClausePage.jsx';
import DonatePage from './pages/DonatePage.jsx';
import FeedBackPage from './pages/FeedBackPage.jsx';
import HelpPage from './pages/HelpPage.jsx';
import UserGuidePAge from './pages/UserGuidePAge.jsx';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/markettrend" element={<MarketTrendPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/policyandclause" element={<PolicyAndClausePage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/feedback" element={<FeedBackPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/userguide" element={<UserGuidePAge />} />
      </Routes>
    </Router>
  )
}

export default App
