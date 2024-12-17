/* eslint-disable react/prop-types */
import { useState } from "react";

import UpArrowIcon from "../../assets/icon/upArrowIcon.png";
import DownArrowIcon from "../../assets/icon/downArrowIcon.png";
import AddCircle from "../../assets/icon/addCircle.png";
import "../../../src/index.css";

const MayBeYouCareCard = ({
  symbol,
  name,
  percentage,
  priceChange,
  currentPrice,
  field,
}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  const truncateName = (name) => {
    const maxLength = 25;
    return name.length > maxLength ? name.slice(0, maxLength) + "..." : name;
  };

  const getBgColorByFieldStock = (field) => {
    switch (field) {
      case "Semiconductors":
        return "#FFC107";
      case "Technology":
        return "#e4002b";
      case "Financial Services":
        return "#8BC34A";
      case "Healthcare":
        return "#4CAF50";
      case "Energy":
        return "#48a9c5";
      case "Consumer Goods":
        return "#2196F3";
      case "Industrials":
        return "#9C27B0";
      case "Real Estate":
        return "#009f4d";
      default:
        return "#003666";
    }
  };

  const Dialog = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const handleOverlayClick = (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={handleOverlayClick}
      >
        <div className="flex flex-col p-6 w-[700px] h-[500px] bg-white rounded-md shadow-lg">
          <div className="flex items-start justify-between">
            <div className="">
              <span className="text-2xl font-semibold tracking-wider">
                {symbol}
              </span>
              <p className="text-base tracking-widest">{name}</p>
            </div>

            <button
              className="text-sm text-gray-500 hover:text-gray-900"
              onClick={closeDialog}
            >
              Close
            </button>
          </div>

          <div className="flex items-center justify-center flex-grow w-full mt-4 text-4xl font-bold bg-red-100">
            LINE CHART
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <button
        className="flex items-center justify-between w-[650px] overflow-y-auto bg-red-000 h-14 border-t border-gray-200 hover:bg-gray-50"
        onClick={() => {
          openDialog();
        }}
      >
        <div className="flex">
          <span className="flex items-center justify-center w-[70px] h-6 px-2 py-1 text-xs font-semibold tracking-widest text-white bg-black rounded-md" style={{backgroundColor: getBgColorByFieldStock(field)}}>
            {symbol}
          </span>
          <h1 className="flex items-center justify-center ml-4 text-sm font-semibold tracking-wider text-gray-600">
            {truncateName(name)}
          </h1>
          {/* {name.length > 25 && (
          <span className='absolute left-0 z-10 w-auto p-2 text-sm text-gray-700 transition-opacity duration-300 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 hover:opacity-100'>
            {name}
          </span>
        )} */}
        </div>

        <div className="flex items-center justify-center">
          <div className="flex-1 mr-0 font-semibold text-gray-600 text-[16px] ">
            {currentPrice} $
          </div>
          <div
            className={`flex items-center justify-end text-[16px] mr-3 font-semibold tracking-wider w-[100px] bg-red-000 ${
              priceChange > 0 ? "text-green-700" : "text-red-700"
            }`}
          >
            {priceChange}
          </div>
          <div
            className={`flex w-[90px] px-1 py-1 rounded-md text-[15px] font-semibold tracking-wider items-center justify-center ${
              priceChange > 0
                ? "text-green-700 bg-emerald-100"
                : "text-red-700 bg-red-100"
            }`}
          >
            {/* {priceChange > 0 ? `+${percentage}` : `-${percentage}`}   */}
            <img
              src={priceChange > 0 ? UpArrowIcon : DownArrowIcon}
              alt={priceChange > 0 ? "Up Arrow" : "Down Arrow"}
              className="w-4 h-4 mr-1 opacity-100"
            />
            {percentage} %
          </div>
          <button
            onClick={null}
            className="active:scale-[.90] active:duration-75 transition-all"
          >
            <img src={AddCircle} alt="add circle" className="w-5 ml-4" />
          </button>
        </div>
      </button>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
};

export default MayBeYouCareCard;
