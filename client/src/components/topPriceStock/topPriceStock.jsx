import TopPriceStockCards from "./topPriceStockCards";

const topPriceStock = () => {
  return (
    <div className="w-full rounded-lg bg-white border-[1.5px] border-gray-200 shadow-sm py-2">
      <h1 className="font-bold tracking-wider text-center text-[17px] my-3">Most Valueable Stock</h1>
      <TopPriceStockCards/>
    </div>
  );
}

export default topPriceStock;