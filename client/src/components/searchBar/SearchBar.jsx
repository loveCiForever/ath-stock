import searchIcon from '../../assets/icon/searchIcon.png';


const SearchBarHead = () => {
  return (
    <div className='flex items-center justify-center'>
      <input 
        type="search" 
        name="" 
        id=""
        className="mt-[50px] border border-gray-200 shadow-md mx-auto rounded-full h-[62px] py-4 px-14 w-[555px] 
        placeholder:text-gray-700 placeholder:pl-2 placeholder:text-[16px] text-black bg-[left_12px_center] bg-no-repeat bg-left-center tracking-widest"
        placeholder='Search for stocks, ETF, news and more'
        style={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          backgroundImage: `url(${searchIcon})`,
          backgroundSize: "23px 23px",
          backgroundPosition: "left 25px center",
        }}
      />
    </div>
  );
};

export default SearchBarHead;