import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const AboutUsPage = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen text-6xl font-bold bg-red-200">
      About Us Page
    </div>
  );
}

export default AboutUsPage;