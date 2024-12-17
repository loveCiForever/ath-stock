import { useEffect, useState } from 'react';
import MayBeYouCareCard from './MayBeYouCareCard';
import stocksData from '../../data/stocks.json';

const MayBeYouCareCards = () => {
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    setStocks(stocksData);
  }, []);

  const getTopStocksPriceChange = (stocks, criterion) => {
    return stocks
      .sort((a, b) => {
        const aPriceChange = parseFloat(a[criterion].replace(/[^0-9.-]+/g, ''));
        const bPriceChange = parseFloat(b[criterion].replace(/[^0-9.-]+/g, ''));
        return Math.abs(bPriceChange) - Math.abs(aPriceChange);
      })
      .slice(0, 10); // Get the top 10 stocks
  };
  
  const topStocks = getTopStocksPriceChange(stocks, 'priceChange');

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
          field={stock.field}
        />
      ))}
    </div>
  );
}

export default MayBeYouCareCards;