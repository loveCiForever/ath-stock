import React, { useState } from "react";
import MarketCard from "./MarketCard";

const MarketCards = () => {
  const [markets] = useState([
    {
      id: 1,
      name: "US Market",
      percentage: "-0.20",
      priceChange: "-81.00",
      currentPrice: "40,774.00",
    },
    {
      id: 2,
      name: "Europe Market",
      percentage: "-0.25",
      priceChange: "-13.75",
      currentPrice: "5,624.50",
    },
    {
      id: 3,
      name: "Asia Market",
      percentage: "-100",
      priceChange: "-34.00",
      currentPrice: "20,035.00",
    },
    {
      id: 4,
      name: "VietNam Market",
      percentage: "+2.50",
      priceChange: "+30.30",
      currentPrice: "2,454.40",
    },
  ]);

  const isMarketUp = (percentage) => parseFloat(percentage) > 0;

  return (
    <div className="flex space-x-4 flex-wrap mt-2 bg-red-00 ">
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