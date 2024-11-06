import React from 'react';

const WavingBarChart = () => {
  return (
    <div className="flex items-end justify-around h-48 m-4">
      <div className="w-8 bg-green-500 bar animate-wave delay-0" style={{ height: '100%' }}></div>
      <div className="w-8 delay-100 bg-green-500 bar animate-wave" style={{ height: '80%' }}></div>
      <div className="w-8 delay-200 bg-green-500 bar animate-wave" style={{ height: '60%' }}></div>
      <div className="w-8 delay-300 bg-green-500 bar animate-wave" style={{ height: '40%' }}></div>
      <div className="w-8 bg-green-500 bar animate-wave delay-400" style={{ height: '20%' }}></div>
    </div>
  );
};

export default WavingBarChart;