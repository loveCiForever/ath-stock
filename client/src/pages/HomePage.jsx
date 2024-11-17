import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const HomePage = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <div className="text-3xl font-bold underline">
      Home Page
    </div>
  );
}

export default HomePage;