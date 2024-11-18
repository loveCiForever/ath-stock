import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const PolicyPage = () => {
  useEffect(() => {
    document.title = "Policy Page";
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen text-6xl font-bold bg-red-200">
      Policy Page
    </div>
  );
}

export default PolicyPage;