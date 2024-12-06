import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CollapseAllIcon from '../../assets/icon/collapseAllIcon.png';
import ExpandAllIcon from '../../assets/icon/expandAllIcon.png';
import MarketCards from './MarketCards.jsx';

const Market = () => {
  const [activeMarket, setActiveMarket] = useState("US");
  const [isExpanded, setIsExpanded] = useState(false);

  // const handleMarketClick = (market) => {
  //   setActiveMarket(market);
  // };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  // const getButtonClasses = (market) =>
  //   `text-[12px] rounded-full px-3 py-[2px] font-semibold ${
  //     market === activeMarket
  //       ? "text-black bg-orange-300"
  //       : "text-gray-600 hover:bg-orange-100"
  //   } `;


  return (
    <div className="flex flex-col w-[850px] h-auto mt-[0px] bg-white">
      <div className="flex flex-col items-start">
        <button
          className="flex items-center justify-center uppercase text-gray-600 tracking-widest font-bold text-[12px] mr-[10px]"
          onClick={handleExpandClick}
        >
          <img
            className="h-4 w-4 mr-[4px]"
            src={isExpanded ? CollapseAllIcon : ExpandAllIcon}
            alt={isExpanded ? "Collapse All Icon" : "Expand All Icon"}
          />
          Visualize
        </button>

        {isExpanded && (
          <div className='w-full h-[400px] bg-red-100 border border-gray-100 rounded-xl shadow-md flex items-center justify-center my-[10px]'>
            <h1 className='text-6xl font-bold '>GRAPH</h1>
          </div>
        )}

      </div>
      <div className='flex items-center justify-center'>
        <MarketCards />
      </div>
      
    </div>
  );
}

export default Market;