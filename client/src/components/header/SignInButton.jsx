import { useNavigate } from "react-router-dom";

const SignInButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="flex items-center justify-center rounded-xl px-3 py-1 hover:bg-orange-300 active:scale-[.90] active:duration-75 transition-all border-[1.5px] border-gray-200 shadow-xs"
      onClick={() => {
        console.log("Sign in button clicked, navigate from homepage to signinpage");
        navigate('/signin');
      }}
    >
      <p className="mb-[0px] font-medium tracking-tight">Sign in</p>
    </button>
  );
}

export default SignInButton;