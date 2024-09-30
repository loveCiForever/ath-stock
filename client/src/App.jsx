import React from 'react'
import athStockLogo from './assets/athStockLogo.png'
import Form from "./components/Form.jsx"

export default function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-white">
        <div className="w-1/2">
          <img src={athStockLogo} alt="athStock logo"/>
        </div>
      </div>
      
      <div className="flex w-full items-center justify-center lg:w-1/2 bg-red-300">
        <Form />
      </div>
    </div>
    // <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

    // </div>
  );
}