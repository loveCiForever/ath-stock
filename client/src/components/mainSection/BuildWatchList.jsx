import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ListIcon from "../../assets/icon/listIcon.png";

const BuildWatchList = () => {
  return (
    <div className="max-w-[900px] h-[60px] w-full flex flex-row items-center mt-[30px] mx-auto rounded-xl border border-gray-300">
      <div className="w-full flex flex-row">
        <img 
          className="ml-4 mt-[6px] h-7 w-6" 
          src={ListIcon} 
          alt="Watchlist" />
        <div className="pl-6">
          <div className="text-[13px] font-semibold">Build a watchlist</div>
          <div className="text-[12px] text-gray-500">
            Sign in to track investments you care about
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildWatchList;