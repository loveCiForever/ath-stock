import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import SideBar from '../components/sideBar/SideBar.jsx';

export default function DonatePage() {
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('credit-card')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Donation submitted:', { amount, paymentMethod })
    alert(`Thank you for your donation of $${amount}!`)
  }

  return (
    <div className="min-h-screen bg-orange-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-orange-700">Make a Donation for athStock</h2>
          <p className="text-orange-600">Your generosity makes a difference</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-orange-700 mb-1">
                Donation Amount
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-orange-400">$</span>
                </div>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="pl-7 block w-full rounded-md border-orange-300 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <span className="block text-sm font-medium text-orange-700 mb-1">Payment Method</span>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    id="credit-card"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500"
                    checked={paymentMethod === 'credit-card'}
                    onChange={() => setPaymentMethod('credit-card')}
                  />
                  <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700">
                    Credit Card
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="paypal"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                  />
                  <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
                    PayPal
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}