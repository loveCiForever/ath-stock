import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const AboutUsPage = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <h1 className="text-3xl font-bold underline">
      About Us Page
    </h1>
  );
}

export default AboutUsPage;