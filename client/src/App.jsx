import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

const App = (props) => {
  return ( 

    <Router>
      <div className='flex items-center justify-center w-full h-screen bg-gray-100 min-w-960'>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;