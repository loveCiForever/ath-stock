import ChartIcon from '../../assets/icon/chartIcon.png';
import PLusIcon from '../../assets/icon/PLusIcon.png';

const CreatPortfolio = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full rounded-lg bg-white border-[1.5px] border-gray-200 shadow-sm py-4 px-4 text-gray-600'>
      <div className='flex items-center justify-center'>
        <div className='flex items-center justify-center px-[6px] py-[6px] rounded-md bg-orange-300 mr-2'>
          <img
            src={ChartIcon}
            alt="chart icon"
            className='w-10 opacity-60'
          />
        </div>
        <p className='text-sm'>Tạo danh mục đầu tư để xem các khoản đầu tư của bạn tại một nơi</p>
      </div>
      <div className='py-[5px] mt-3 w-full flex items-center justify-center rounded-2xl bg-white-200 border-[1px] border-gray-200 hover:bg-gray-100'>
        <img
          src={PLusIcon}
          alt="plus icon"
          className='w-5 mr-2 opacity-70'
        />
        <button
          className='text-gray-700 font-semibold '
        >
          New portfolio
        </button>
      </div>
    </div>
  );
}

export default CreatPortfolio;