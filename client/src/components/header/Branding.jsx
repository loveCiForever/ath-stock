import { Link } from "react-router-dom";
import athStockLogo from '../../assets/logo/athStockLogo.png';

const Branding = () => {
  return (
    <div className="flex items-center justify-center ml-3 ">
      <Link 
        to='/'
        className='flex'
      >
        <img 
          src={athStockLogo}
          alt="Logo"
          className="w-[100px] items-center justify-center" 
        />
      </Link>
    </div>
  );
};

export default Branding;