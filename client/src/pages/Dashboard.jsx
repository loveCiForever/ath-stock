import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import loginPicture from '../assets/picture/loginPicture.png'

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';





const Dashboard = (props) => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="flex flex-col h-screen min-w-1500px"> {/* Outer container with full height */}
      <Header />
      <main className="h-1/10 flex items-center justify-center flex-grow mx-72" > {/* Main content area */}
        <p className='w-full'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ex cursus ipsum sodales consequat et  sed ligula. Cras eget ultricies dui. Ut odio turpis, vehicula et ipsum eget, lobortis laoreet risus. Nullam vel mi sit amet elit eleifend sagittis. Nullam nisi dui, hendrerit placerat euismod ut, commodo sit amet turpis. Aliquam dignissim eleifend urna sed congue. Ut scelerisque mi et lacinia viverra. Suspendisse scelerisque gravida pretium. Fusce bibendum blandit vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam aliquet, lectus ut maximus dignissim, neque purus tempor nibh, et interdum tortor diam vel erat. Nunc nec ante quis nisi condimentum blandit at nec elit. Vivamus hendrerit ac nibh sit amet luctus. Mauris est nisi, iaculis consequat interdum vitae, tincidunt at est. Proin tincidunt interdum nulla.
        </p>
        <p className='w-full'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ex cursus ipsum sodales consequat et  sed ligula. Cras eget ultricies dui. Ut odio turpis, vehicula et ipsum eget, lobortis laoreet risus. Nullam vel mi sit amet elit eleifend sagittis. Nullam nisi dui, hendrerit placerat euismod ut, commodo sit amet turpis. Aliquam dignissim eleifend urna sed congue. Ut scelerisque mi et lacinia viverra. Suspendisse scelerisque gravida pretium. Fusce bibendum blandit vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam aliquet, lectus ut maximus dignissim, neque purus tempor nibh, et interdum tortor diam vel erat. Nunc nec ante quis nisi condimentum blandit at nec elit. Vivamus hendrerit ac nibh sit amet luctus. Mauris est nisi, iaculis consequat interdum vitae, tincidunt at est. Proin tincidunt interdum nulla.
        </p>
        <p className='w-full'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ex cursus ipsum sodales consequat et  sed ligula. Cras eget ultricies dui. Ut odio turpis, vehicula et ipsum eget, lobortis laoreet risus. Nullam vel mi sit amet elit eleifend sagittis. Nullam nisi dui, hendrerit placerat euismod ut, commodo sit amet turpis. Aliquam dignissim eleifend urna sed congue. Ut scelerisque mi et lacinia viverra. Suspendisse scelerisque gravida pretium. Fusce bibendum blandit vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam aliquet, lectus ut maximus dignissim, neque purus tempor nibh, et interdum tortor diam vel erat. Nunc nec ante quis nisi condimentum blandit at nec elit. Vivamus hendrerit ac nibh sit amet luctus. Mauris est nisi, iaculis consequat interdum vitae, tincidunt at est. Proin tincidunt interdum nulla.
        </p>
      </main>


      
      <Footer className="flex items-center justify-end" /> {/* Footer at the bottom */}
    </div>
  );
}

export default Dashboard;