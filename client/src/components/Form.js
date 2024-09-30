import * as React from 'react';

export default function Form() {
    return (
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
            <h1 className="text-5xl font-semibold">Welcome Back</h1>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Email</label>
                    <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="Enter your email" type="email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="Enter your password" type="password"/>
                </div>
                <div>
                    <div>
                        <input type="checkbox" id="remember"/>
                        <label for="remember">Remember for 30 days</label>
                    </div>
                    <button>Forgot password</button>
                </div>
 
            </div>
        </div>
    );
}