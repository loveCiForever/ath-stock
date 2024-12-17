import StockData from '../../data/stocks.json';
import React, { useState, useEffect } from 'react';
import TopPriceStockCard from './topPriceStockCard';

const topPriceStockCards = () => {
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    setStocks(StockData);
    // console.log(stocksData);
  }, [])

  const getTopStocksCurrentPrice = (stocks, criterion) => {
    return stocks
      .sort((a, b) => {
        const aPriceChange = parseFloat(a[criterion].replace(/[^0-9.-]+/g, ''));
        const bPriceChange = parseFloat(b[criterion].replace(/[^0-9.-]+/g, ''));
        return Math.abs(bPriceChange) - Math.abs(aPriceChange);
      })
      .slice(0, 9); // Get the top 20 stocks
  };
  const topStocks = getTopStocksCurrentPrice(stocks, 'currentPrice');

  return (
    <div className='flex flex-wrap'>
      {topStocks.map((stock, index) => (
        <TopPriceStockCard
          key={stock.id}
          rank={index + 1}
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

export default topPriceStockCards;