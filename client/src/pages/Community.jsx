import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const Community = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    document.title = "Community";
  }, []);

  return (
    <h1 className="">
      Community
    </h1>
  );
}

export default Community;