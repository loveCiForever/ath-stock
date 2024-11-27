// shift alt o
import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import githubLogo from '../../assets/logo/githubLogo.svg';
import googleLogo from '../../assets/logo/googleLogo.svg';
import { auth } from '../../auth/firebase.jsx';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';

const SignInForm = () => {
  const navigate = useNavigate();

  // SIGN IN BY USER'S EMAIL AND PASSWORD
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
  const onSubmit = data => {
    console.log('Submitted', data);
    signInWithEmailAndPassword(data.email, data.password)
  };

  // Thông báo đăng nhập thành công hoặc không
  useEffect(() => {
    if (user) {
      console.log("Sign in successful!", user);
      toast.success('Sign in successful!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => { navigate('/'); }, 3000);
    }
    if (error) {
      console.error("Sign in successful!", error);
      toast.error('Sign in failed. Please check your credentials.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [user, error, navigate]);

  // SIGN IN BY GOOGLE ACCOUNT
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          console.log('Google Sign-In Successful', result.user);
          toast.success('Sign in successful!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => { navigate('/'); }, 3000);
        }
      } catch (error) {
        console.error('Google Sign-In Error', error);
        toast.error('Google Sign-In Failed', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };

    handleRedirectResult();
  }, [navigate]);

  return (
    <div className="w-full shadow-xs px-[20px] py-[30px] min-w-[96px]">
      <h1 className="text-start font-bold text-[30px]">Welcome Back!</h1>
      <h2 className="tracking-wider text-start font-normal text-[15px] mt-[1px] text-placeholder-text-color">To continue, sign in to your account.</h2>
      <div className="mt-[20px]">

        <form
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="email"
              className="w-full tracking-wide bg-placeholder-bg-color py-[14px] pl-[20px] mt-[6px] text-[15px] rounded-[10px] font-400 text-placeholder-text-color min-w-[350px]"
              name="email"
              placeholder="Enter your mail"
              {...register("email",
                {
                  required: true,
                  validate: value => value.length >= 1 || "Email required"
                }
              )}
            />
            {errors.email && <span className='ml-[3px] text-red-500 text-sm'>{errors.email.message}</span>}
          </div>

          <div className="mt-[10px]">
            <input
              type="password"
              className="w-full tracking-wide bg-placeholder-bg-color py-[14px] pl-[20px] mt-[6px] text-[15px] rounded-[10px] font-normal text-placeholder-text-color min-w-[350px]"
              name="password"
              placeholder="Password"
              {...register("password",
                {
                  required: true,
                  validate: value => value.length >= 1 || "Password required"
                }
              )}
            />
          </div>
          {errors.password && <span className='ml-[3px] text-red-500 text-sm'>{errors.password.message}</span>}

          <div className="flex items-center justify-end mt-[10px]">
            <button
              className="font-semibold text-[14px] text-black
                    hover:text-black
                    0 active:scale-[.98] hover:underline active:duration-75 transition-all "
              type='submit'
            >
              Forgot password
            </button>
          </div>
          <ToastContainer />
          <div className="flex flex-col mt-[20px]">
            <button
              type="submit"
              onClick={() => {
                console.log('Sign in button clicked')
              }}
              className="py-[14px] rounded-xl bg-black text-[15px] text-white font-semibold tracking-wider hover:bg-gray-800 active:scale-[.98] active:duration-75 transition-all"
            >
              Sign in
            </button>
            <div className='flex items-center justify-center mt-[10px]'>
              <hr className="w-1/4 h-1/2 bg-placeholder-bg-color" />
              <h2 className="tracking-wider text-center font-normal text-[13px] my-[10px] mx-[20px] text-placeholder-text-color">Or sign in with</h2>
              <hr className="w-1/4 h-1/2 bg-placeholder-bg-color" />
            </div>

            <div className="flex flex-col">
              <button
                className="flex content-center items-center justify-center border-2 border-gray-200 py-3 rounded-xl mt-[10px] bg-white text-black font-normal hover:bg-gray-100 active:scale-[.98] active:duration-75 transition-all "
                onClick={signInWithGoogle}
              >
                <img src={googleLogo} />
                <h1 className="ml-[10px] text-[14px] font-normal">Sign in with Google</h1>
              </button>

              <button
                className="flex content-center items-center justify-center border-2 border-gray-200 py-3 rounded-xl mt-[10px] bg-white text-black font-normal hover:bg-gray-100 active:scale-[.98] active:duration-75 transition-all "
              >
                <img src={githubLogo} />
                <h1 className="ml-[10px] text-[14px] font-normal">Sign in with Github </h1>
              </button>
            </div>

            <div className="flex items-center content-center justify-center mt-[10px]">
              <div className="tracking-wider text-[14px] font-normal">
                Don't have an account?
              </div>
              <button
                onClick={() => {
                  navigate('/signup')
                  console.log("Sign up button clicked, navigate to SignUpPage")
                }}
                className="ml-[3px] font-semibold text-[14px] text-black hover:text-black hover:underline active:scale-[.98] active:duration-75 transition-all tracking-wider"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
