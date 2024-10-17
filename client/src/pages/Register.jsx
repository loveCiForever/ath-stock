import * as React from 'react';
import { useState } from 'react';
import { useEffect} from 'react';
import axios from "axios";

import RegisterFrom from "../components/RegisterForm.jsx";

export default function Register() {
  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <div>
      <RegisterFrom />
    </div>
  );

}