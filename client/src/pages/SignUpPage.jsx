import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const SignUpPage = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  return (
    <h1 className="text-3xl font-bold underline">
      Sign Up Page
    </h1>
  );
}

export default SignUpPage;