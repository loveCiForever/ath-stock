import React, { useState } from 'react';
import MayBeYouCare from './MayBeYouCare';

const MayBeYouCares = () => {
  const [stocks] = useState([
    {
      id: 1,
      name: "Advanced Micro Devices Inc",
      symbol: "AMD",
      currentPrice: "32.45",
      percentage: "1.2",
      priceChange: "+21.1",
    },
  ]);

  const isStockUp =(percentage) => parseFloat(percentage) > 0;

  return (
    <div className="">
      {stocks.map(stock => (
        <MayBeYouCare
          key={stock.id}
          symbol={stock.symbol} 
          name={stock.name}
          currentPrice={stock.currentPrice}
          percentage={stock.percentage} 
          priceChange={stock.priceChange}
          isUp={isStockUp(stock.percentage)} 
        />
      ))}
    </div>
  );
}

export default MayBeYouCares;