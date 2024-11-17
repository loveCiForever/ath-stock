import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const LoginPage = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    document.title = "Log In";
  }, []);

  return (
    <h1 className="">
      Log In Page
    </h1>
  );
}

export default LoginPage;