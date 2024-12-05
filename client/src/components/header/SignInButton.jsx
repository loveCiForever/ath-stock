import { useNavigate } from "react-router-dom";

const SignInButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="flex items-center justify-center ml-2 active:scale-[.90] active:duration-75 transition-all border-gray-200 shadow-xs"
      onClick={() => {
        // console.log("Sign in button clicked, navigate from homepage to signinpage");
        navigate('/signin');
      }}
    >
      <p className="mb-[0px] font-medium hover:font-semibold tracking-tight">Sign in</p>
    </button>
  );
}

export default SignInButton;