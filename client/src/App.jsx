import React from 'react'
import athStockLogo from './assets/athStockLogo.png'
import Form from "./components/Form.jsx"

export default function App() {
  return ( 
    // ---------------------------- Login Page ----------------------------
    <div className="flex flex-col w-full h-screen
                    justify-center items-center
                    px-6 py-12 lg:px-8">
      <img src={athStockLogo} alt="My Company" className="h-16 mb-10" />
      <Form/>
    </div>
    // ---------------------------- Login Page ----------------------------
  );
}