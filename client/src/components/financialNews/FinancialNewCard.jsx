import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FinancialNewCard = ({ title, newPaperName, time, image, link }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);
  const navigate = useNavigate();

  const Dialog = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const handleOverlayClick = (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={handleOverlayClick}
      >
        <div className="flex flex-col p-6 w-[700px] h-[500px] bg-white rounded-md shadow-lg">
          <div className='flex items-start justify-between'>
            <div className=''>
              <span className='text-2xl font-semibold tracking-wider'>
                ddddddd
              </span>
              <p className='text-base tracking-widest'>
                dddddd
              </p>
            </div>
            
            <button 
              className='text-sm text-gray-500 hover:text-gray-900'
              onClick={closeDialog}
            >
              Close
            </button>
          </div>


          <div className='flex items-center justify-center flex-grow w-full mt-4 text-4xl font-bold bg-red-100'>
            dddddddddd
          </div>
        </div>
      </div>
    );
  };

  return (
    <a 
      className=''
      href={link} 
      target='_blank'
      rel="noopener noreferrer"
    >
      <button 
        className='flex items-center justify-between w-[650px] overflow-y-auto bg-red-000 h-32 border-t border-gray-200 hover:bg-gray-50'
        onClick={(event) => {
          event.preventDefault(); // Prevent the default anchor behavior
          window.open(link, '_blank'); // Open the link in a new tab
        }}
      >
        <div className='flex items-center justify-between w-full bg-red-000'>
          {/* info */}
          <div className='flex-col'>
            {/* name + time */}
            <div className='flex items-center justify-start'>
              <h1 className='text-[15px] font-semibold text-gray-500'> {newPaperName} </h1>
              <h1 className='mx-2'> &#x2022; </h1>
              <h1 className='ml-1 text-gray-500 text-[14px]'> {time} </h1>
            </div>
            
            {/* title */}
            <div className='w-[100%] text-left mt-2'>
              <h1 className='tracking-wider'>{title}</h1>
            </div>
          </div>
          
          {/* image */}
          <div className='ml-10 max-w-40'>
            <img 
              src={image}
              alt={title}
              className='rounded-xl' 
            />
          </div>
        </div>
      </button>
    </a>
  );
}

export default FinancialNewCard;