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
    <div
      className="max-w-[1000px] flex flex-col w-full h-auto pt-[16px]"
      style={{
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
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
          Visualize by graph
        </button>

        {isExpanded && (
          <div className='w-full h-[400px] bg-white border border-gray-100 rounded-xl shadow-md flex items-center justify-start my-[10px]'>
          </div>
        )}

      </div>
      <MarketCards />
    </div>
  );
}

export default Market;