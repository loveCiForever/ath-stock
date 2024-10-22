import React from 'react'

import './index.css'

import athStockLogo from './assets/athStockLogo.png'
import LoginForm from './components/LoginForm.jsx'
import RegisterForm from './components/RegisterForm.jsx';

import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx';



export default function App() {
  return ( 
    // ---------------------------------------------- Login Page ----------------------------------------------
    
    <div className='flex items-center justify-center w-full h-screen bg-gray-100 min-w-960'>
      <Login/>
    </div>
    
    // ---------------------------------------------- Login Page ----------------------------------------------
  );
}