import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const StockPage = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    document.title = "Stock Market";
  }, []);

  return (
    <h1 className="text-3xl font-bold underline">
      Stock Market Page
    </h1>
  );
}

export default StockPage;