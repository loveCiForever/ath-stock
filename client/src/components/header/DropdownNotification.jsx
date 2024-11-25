import React from 'react';
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";

const DropdownNotification = () => {

  return (
    <div className="flex flex-col absolute top-[4.5rem]">
       <ul className='flex flex-col gap-4'>
        <li>Update new feature: </li>
        <li>Fix bug: </li>
        <li>Bla bla daddy handsome</li>
       </ul>
    </div >
  )
};

export default DropdownNotification;