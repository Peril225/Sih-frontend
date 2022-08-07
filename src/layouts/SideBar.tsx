import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import Logo from "../assets/Images/Logo.png";

export default function SideBar() {
  return (
    <div className=' px-4 py-6 hidden sm:flex bg-bgr1 h-screen justify-between items-center flex-col'>
      <div className='py-7'>
        <img className='cursor-pointer' src={Logo} width={75} height={75} />
      </div>
      <div className='p-4 bg-slate-500 rounded-lg hover:text-red-400 cursor-pointer'>
        <AiOutlinePoweroff size={40} className='' />
      </div>
    </div>
  );
}
