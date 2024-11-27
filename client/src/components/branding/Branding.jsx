import { useNavigate } from "react-router-dom";
import athStockLogo from '../../assets/logo/athStockLogo.png';

const Branding = () => {
  const navigate = useNavigate();
  return (
    <button 
      className="flex items-center justify-center ml-3 active:scale-[.95] active:duration-75 transition-all"
      onClick={() => {
        navigate('/');
      }}
    >
      <img 
        src={athStockLogo}
        alt="Logo"
        className="w-[100px] items-center justify-center" 
      />
    </button>
  );
};

export default Branding;