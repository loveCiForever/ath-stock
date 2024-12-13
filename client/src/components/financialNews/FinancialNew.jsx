

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoIcon from '../../assets/icon/infoIcon.png';
import FinancialNewCards from './FinancialNewCards';

const FinancialNew = () => {

  return (
    <div className='flex flex-col items-center justify-center w-[650px]'>
      <div className="flex items-center justify-start w-full mb-4">
        <h1 className="text-xl font-semibold bg-red-000">Financial News Today</h1>
      </div>
      <FinancialNewCards />
    </div>
  );
}

export default FinancialNew;