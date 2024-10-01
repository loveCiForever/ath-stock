import React from 'react'
import athStockLogo from './assets/athStockLogo.png'
import Form from "./components/Form.jsx"

// 1. Layout classes (e.g., w-1/3, flex, justify-center)
// 2. Spacing classes (e.g., px-10, py-10, mt-8)
// 3. Typography classes (e.g., text-lg, font-normal)
// 4. Background and border classes (e.g., bg-white, border-2)
// 5. Color classes (e.g., text-orange-400)
// 6. Other utility classes (e.g., active:scale-[.98], transition-all)

export default function App() {
    return ( 
        // ---------------------------- Login Page ----------------------------
        <div 
            className="
                flex w-full h-screen justify-evenly items-center
                px-12 py-12 lg:px-8">
            <img 
                src={athStockLogo} 
                alt="My Company" 
                className="hidden lg:flex w-1/4 ml-36" />
            <Form/>
        </div>
    //     <div className="flex w-full h-screen">
    //     <div className="hidden lg:flex h-full w-1/2 items-center justify-center">
    //       <div className="w-1/2">
    //         <img src={athStockLogo} alt="athStock logo"/>
    //       </div>
    //     </div>
        
    //     <div className="flex w-full items-center justify-center lg:w-1/2">
    //       <Form />
    //     </div>
    //   </div>

        // ---------------------------- Login Page ----------------------------
    );
}
