import React from "react";

import BuildWatchList from './BuildWatchList.jsx';
import MarketInterest from './MarketInterest.jsx';
import MayBeYouCare from "../mayBeYouCare/MayBeYouCare.jsx";


const MarketSection = () => {

  return (
    <div className="flex w-full h-auto mt-[40px] bg-red-000 items-center justify-center">

      <div className="">
        <MayBeYouCare />
      </div>
    </div>
  );
}

export default MarketSection;