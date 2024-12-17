import TopActiveStockCards from "./topActiveStockCards";

const topActiveStock = () => {
  return (
    <div className="w-full rounded-lg bg-white border-[1.5px] border-gray-200 shadow-sm py-2 text-gray-600">
      <h1 className="font-bold tracking-wider text-center text-[17px] mt-3 mb-5">Most Active Stock</h1>
      <TopActiveStockCards/>
    </div>
  );
}

export default topActiveStock;