import React from 'react'

import athStockLogo from './assets/athStockLogo.png'
import Login from './components/Login.jsx'





export default function App() {
  return ( 
    // ---------------------------- Login Page ----------------------------
    <div className="flex flex-col lg:w-full h-screen min-w-960
        justify-center items-center
        bg-gray-200">
      <div className="lg:w-1/2 max-w-600 w-1/2
          justify-center items-center ">
        <Login/>
      </div>
    </div>
    // ---------------------------- Login Page ----------------------------
  );
}
