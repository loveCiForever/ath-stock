import React, { useEffect, useState } from 'react';
import newsData from '../../data/news.json';
import FinancialNewCard from './FinancialNewCard';

const FinancialNewCards = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    setNews(newsData);
  }, [])


  return (
    <div className='flex flex-wrap'>
      {news.map(newPaper => (
        <FinancialNewCard
          key={newPaper.id}
          title={newPaper.title}
          newPaperName={newPaper.newPaperName}
          time={newPaper.time}
          image={newPaper.image}
          link={newPaper.link}
        />
      ))}

    </div>
  );
}

export default FinancialNewCards;