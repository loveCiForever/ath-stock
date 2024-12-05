import React, { useEffect, useState } from 'react';
import MayBeYouCareCard from './MayBeYouCareCard';
import stocksData from '../../data/stocks.json';

const MayBeYouCareCards = () => {
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    setStocks(stocksData);
    // console.log(stocksData);
  }, [])


  const getTopStocks = (stocks, criterion) => {
    return stocks
      .sort((a, b) => {
        const aPriceChange = parseFloat(a[criterion].replace(/[^0-9.-]+/g, ''));
        const bPriceChange = parseFloat(b[criterion].replace(/[^0-9.-]+/g, ''));
        return bPriceChange - aPriceChange;
      })
      .slice(0, 6);
  };
  const topStocks = getTopStocks(stocks, 'priceChange');

  return (
    <div className="flex flex-wrap">
      {topStocks.map(stock => (
        <MayBeYouCareCard
          key={stock.id}
          symbol={stock.symbol}
          name={stock.name}
          currentPrice={stock.currentPrice}
          percentage={stock.percentage}
          priceChange={stock.priceChange}
        />
      ))}
    </div>
  );
}

export default MayBeYouCareCards;