import * as React from 'react';

export default function Form() {
    return (
        <div className="w-1/3 bg-white px-10 py-10 rounded-3xl ">
            <h1 className="text-5xl font-semibold text-center">Welcome Back</h1>

            <div className="mt-8">
                <div>
                    <label className="text-lg font-normal">Email</label>
                    <input 
                        className="w-full rounded-xl p-4 mt-1 bg-gray-100" 
                        placeholder="Enter your email" 
                        type="email"
                    />
                </div>

                <div className='mt-3'>
                    <label className="text-lg font-normal">Password</label>
                    <input 
                        className="w-full rounded-xl p-4 mt-1 bg-gray-100" 
                        placeholder="Enter your password" 
                        type="password"
                    />
                </div>

                <div className='mt-3 flex justify-between'>
                    <div>
                        <input type="checkbox" id="remember"/>
                        <label 
                            className="ml-1 font-normal text-base"
                            for="remember">
                            Remember password
                        </label>
                    </div>
                    <button 
                        className="active:scale-[.98] active:duration-75 transition-all 
                        font-bold text-base text-orange-400">
                        Forgot password
                    </button>
                </div>
            </div>

            <div className='mt-8 flex flex-col gap-y-2'>
                <button 
                    className='active:scale-[.98] active:duration-75 transition-all 
                    py-3 rounded-3xl bg-orange-400 text-xl text-white font-bold'>
                    Sign In
                </button>

                <h1 className='my-1 text-center font-medium text-base'>OR</h1>

                <button 
                    className='flex content-center items-center justify-center 
                    active:scale-[.98] active:duration-75 transition-all 
                    border-2 border-gray-200 py-3 rounded-3xl 
                    bg-white text-black font-normal'>  
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"> 
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        <path d="M1 1h22v22H1z" fill="none"/>
                    </svg>

                    <div className="ml-2 text-lg">Sign in with Google</div>
                </button>

                <button 
                    className='flex content-center items-center justify-center 
                    active:scale-[.98] active:duration-75 transition-all 
                    border-2 border-gray-200 py-3 rounded-3xl 
                    bg-white text-black font-normal'>  
                    <svg width="26px" height="26px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"/>
                        <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"/>
                        <defs>
                            <linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#18ACFE"/>
                            <stop offset="1" stop-color="#0163E0"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="ml-2 text-lg">Sign in with Facebook</div>
                </button>

                <div className='flex content-center items-center justify-center'>
                    <div className='font-normal text-base'>Don't have an account?</div>
                    <button 
                        className='active:scale-[.98] active:duration-75 transition-all
                        ml-2 font-bold text-base text-orange-400'>
                        Sign Up
                    </button>
                </div>
                
            </div>
        </div>
    );
}