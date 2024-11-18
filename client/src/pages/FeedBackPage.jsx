import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const FeedBackPage = () => {
  useEffect(() => {
    document.title = "FeedBack";
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen text-6xl font-bold bg-red-200">
      Feed Back Page
    </div>
  );
}

export default FeedBackPage;