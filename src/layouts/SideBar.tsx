import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useNavigate } from "react-router";
import Logo from "../assets/Images/Logo.png";

export default function SideBar({
  setExplore,
  Explore,
}: {
  setExplore: (val: boolean) => void;
  Explore: boolean;
}) {
  const history = useNavigate();
  return (
    <div className=' px-4 py-6 hidden md:flex  bg-bgr1 h-screen justify-between items-center flex-col'>
      <div className='py-7'>
        <img
          className='cursor-pointer'
          src={Logo}
          width={75}
          height={75}
          onClick={() => setExplore(true)}
        />
      </div>
      <div
        className='p-4 bg-slate-500 rounded-lg hover:text-red-400 cursor-pointer '
        onClick={() => {
          localStorage.removeItem("auth-token");
          history("/login");
        }}
      >
        <AiOutlinePoweroff size={40} className='' />
      </div>
    </div>
  );
}
