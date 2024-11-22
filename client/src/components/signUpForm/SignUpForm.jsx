
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { auth } from '../../auth/firebase.jsx';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import googleLogo from '../../assets/logo/googleLogo.svg';
import githubLogo from '../../assets/logo/githubLogo.svg';


const SignUpForm = () => {
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
    console.log(user);
    console.log(error);
  };
  if (user) {
    console.log(user);
    console.log("Sign up successful");
  };
  if (error) {
    console.log(error);
    console.log("Sign up failed");
  }

  return (
    <div className="w-full shadow-xs px-[25px] py-[30px]">
      <h1 className="text-start font-700 text-[30px]">Sign Up For Free</h1>
      <h2 className="tracking-wider text-start font-400 text-[15px] mt-[1px] text-placeholder-text-color">To continue with us, create an account.</h2>
      <div className="mt-[20px]">
        <form
          className="flex flex-col"
          onSubmit={
            handleSubmit(onSubmit)
          }
        >
          <div className="flex items-center justify-between">
            <div>
              <input
                type="text"
                className="tracking-wide bg-placeholder-bg-color w-full py-[14px] pl-[20px] mt-[6px] text-[15px] rounded-[10px] font-400 text-gray-900"
                name="firstName"
                placeholder="First Name"
                {...register("firstName", 
                  {
                    require: true,
                    validate: value => value.length >= 1 || "First name is required"
                  }
                )}
              />
              {errors.firstName && <span className='ml-[3px] text-red-500 text-sm'>{errors.firstName.message}</span>}
            </div>

            <div className="ml-[10px]">
              <input
                type="text"
                className=" tracking-wide bg-placeholder-bg-color w-full py-[14px] pl-[20px] mt-[6px] text-[15px] rounded-[10px] font-400 text-gray-700"
                name="lastName"
                placeholder="Last Name"
                {...register("lastName", 
                  {
                    require: true,
                    validate: value => value.length >= 1 || "Last name is required"
                  }
                )}
              />
              {errors.lastName && <span className='ml-[3px] text-red-500 text-sm'>{errors.lastName.message}</span>}
            </div>
          </div>

          <div className="mt-10px">
            <input
              type="email"
              className="w-full tracking-wide bg-placeholder-bg-color py-[14px] pl-[20px] mt-[6px] text-[15px] rounded-[10px] font-400 text-gray-700"
              name="email"
              placeholder="Email"
              {...register("email",
                {
                  require: true,
                  validate: value => value.length >= 1 || "Email is required"
                }
              )}
            />
            {errors.email && <span className='ml-[3px] text-red-500 text-sm'>{errors.email.message}</span>}
          </div>

          <div className="mt-10px">
            <input
              type="text"
              className="w-full tracking-wide bg-placeholder-bg-color py-[14px] pl-[20px] mt-[6px] text-[15px] rounded-[10px] font-400 text-gray-700"
              name="userName"
              placeholder="User name"
              {...register("userName", 
                {
                  require: true,
                  validate: value => value.length >= 1 || "User name is required"
                }
              )}
            />
            {errors.userName && <span className='ml-[3px] text-red-500 text-sm'>{errors.userName.message}</span>}
          </div>

          <div className="mt-10px">
            <input
              type="password"
              className="w-full tracking-wide bg-placeholder-bg-color py-[14px] pl-[20px] mt-[6px] text-[15px] rounded-[10px] font-400 text-gray-700"
              name="password"
              placeholder="Password"
              {...register("password", 
                {
                  require: true,
                  validate: value => value.length >= 6 || "Password should be at least 6 characters"
                }
              )}
            />
          </div>
          {errors.password && <span className='ml-[3px] text-red-500 text-sm'>{errors.password.message}</span>}

          <div className='flex items-center justify-start mt-[10px]'>
            <input
              type="checkbox"
              id="remember"
              className='items-center justify-center ml-[5px] max-h-3'
            />
            <label
              className="items-center justify-center ml-2 text-base font-normal text-[13px] hover:underline"
              for="remember">I agree to all Terms, Privacy and Fees
            </label>
          </div>

          <div className="flex flex-col mt-[20px]">
            <button
              type='submit'
              onClick={() => {
                console.log("Sign up button clicked")
              }}
              className="py-[14px] rounded-xl bg-black text-15px text-white font-400 tracking-wider hover:bg-gray-700 active:scale-[.98] active:duration-75 transition-all"
            >
              Sign up
            </button>
            <div className='flex items-center justify-center mt-[10px]'>
              <hr className="w-1/4 h-1/2 bg-placeholder-bg-color" />
              <h2 className="tracking-wider text-center font-400 text-[13px] my-[10px] mx-[20px] text-placeholder-text-color">Or sign in with</h2>
              <hr className="w-1/4 h-1/2 bg-placeholder-bg-color" />
            </div>

            <div className="flex flex-col">
              <button
                className="flex content-center items-center justify-center border-2 border-gray-200 py-3 rounded-xl mt-[10px] bg-white text-black font-normal hover:bg-gray-100 active:scale-[.98] active:duration-75 transition-all "
                type='submit'
              >
                <img src={googleLogo} />
                <h1 className="ml-10px text-14px font-500">Sign in with Google</h1>
              </button>
              <button
                className="flex content-center items-center justify-center border-2 border-gray-200 py-3 rounded-xl mt-[10px] bg-white text-black font-normal hover:bg-gray-100 active:scale-[.98] active:duration-75 transition-all "
              >
                <img src={githubLogo} />
                <h1 className="ml-[10px] text-[14px] font-500">Sign in with Github </h1>
              </button>
            </div>

            <div className="flex items-center content-center justify-center mt-[10px]">
              <div className="tracking-wider text-[14px] font-400">
                Already have an account?
              </div>
              <button
                onClick={() => {
                  navigate('/signin')
                  console.log("Sign in button clicked, navigate to SignInPage")
                }}
                className="ml-[3px] font-500 text-[14px] text-black hover:text-black hover:underline active:scale-[.98] active:duration-75 transition-all tracking-wider"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;