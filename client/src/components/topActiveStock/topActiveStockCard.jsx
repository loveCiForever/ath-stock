import React, { useRef, useState, useEffect } from 'react';

const topActiveStockCard = ({ symbol, rank, name, percentage, priceChange, currentPrice, isUp }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  const truncateName = () => {
    const maxLength = 10;
    return (name.length > maxLength ? name.slice(0, maxLength) + '...' : name);
  }

  const getStatusColorBg = (priceChange) => {
    if(priceChange > 0) {
      return 'bg-green-200'
    } else if(priceChange < 0) {
      return 'bg-red-100'
    } else {
      return 'bg-gray-400'
    }
  };

  const getStatusColorText = (priceChange) => {
    if(priceChange > 0) {
      return 'text-green-700'
    } else if(priceChange < 0) {
      return 'text-red-700'
    } else {
      return 'text-gray-400'
    }
  };

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
                {symbol}
              </span>
              <p className='text-base tracking-widest'>
                {name}
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
            LINE CHART
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-3">
      <button
        className='flex items-center justify-between w-[300px] overflow-y-auto bg-red-000 h-14 border-t border-gray-200 hover:bg-gray-50'
        onClick={() => {
          openDialog()
        }}
      >
        <div className='flex'>
          <span className={`flex items-center justify-center w-[70px] h-6 px-2 py-1 text-xs font-bold tracking-widest rounded-md ${getStatusColorBg(priceChange)} ${getStatusColorText(priceChange)}`}>
            {symbol}
          </span>
          <h1 className='flex items-center justify-center ml-4 text-sm font-semibold tracking-wider text-gray-600'>
            {truncateName(name)}
          </h1>
          {/* {name.length > 25 && (
          <span className='absolute left-0 z-10 w-auto p-2 text-sm text-gray-700 transition-opacity duration-300 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 hover:opacity-100'>
            {name}
          </span>
        )} */}
        </div>

        <div className='flex items-center justify-center'>
          <div className='flex-1 mr-1 font-semibold text-gray-600 text-[16px] '>
            {currentPrice} $
          </div>
        </div>
      </button>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
}

export default topActiveStockCard;