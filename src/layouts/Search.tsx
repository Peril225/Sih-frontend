import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { SearchProps } from "../../typings";

function Search(props: SearchProps) {
  return (
    <>
      <label className='text-slate-500 font-bold px-4'>
        Select State or District
      </label>
      <div className='w-full flex items-center bg-bgr1'>
        <BiSearchAlt className='text-slate-500 px-4 ' size={60} />
        <input
          className='bg-bgr1 outline-none w-full p-5 pl-0 text-blue-400 text-lg font-mono'
          placeholder={props.placeholder}
          onFocus={() => props.setShowState(true)}
          onBlur={() => props.setShowState(false)}
        />
      </div>
    </>
  );
}

export default Search;
