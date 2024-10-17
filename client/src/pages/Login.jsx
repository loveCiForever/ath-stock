import * as React from 'react';
import { useState } from 'react';
import { useEffect} from 'react';
import axios from "axios";

import LoginForm from "../components/LoginForm";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <LoginForm className="w-full lg:w-full max-w-600"/>
    </div>
  );

}