import { useNavigate } from "react-router-dom";

const SignInButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="flex items-center justify-center rounded-xl px-3 py-1 hover:bg-orange-300 active:scale-[.90] active:duration-75 transition-all"
      onClick={() => {
        console.log("Sign in button clicked, navigate from homepage to signinpage");
        navigate('/signin');
      }}
    >
      <p className="mb-[5px] font-semibold tracking-tight">Sign in</p>
    </button>
  );
}

export default SignInButton;