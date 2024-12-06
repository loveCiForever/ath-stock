import React, { useEffect, useState } from "react";
import MarketCard from "./MarketCard";
import marketsData from '../../data/markets.json';

const MarketCards = () => {
  const [markets, setMarkets] = useState([]);
  useEffect(() => {
    setMarkets(marketsData)
  }, []);
  
  const isMarketUp = (percentage) => parseFloat(percentage) > 0;

  return (
    <div className="flex flex-wrap mt-2 space-x-4 bg-red-00 ">
      {markets.map((market) => (
        <MarketCard
          key={market.id}
          name={market.name}
          percentage={market.percentage}
          priceChange={market.priceChange}
          currentPrice={market.currentPrice}
          isUp={isMarketUp(market.percentage)}
        />
      ))}
    </div>
  );
}

export default MarketCards;