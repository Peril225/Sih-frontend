import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { SearchProps } from "../../typings";
import Testin from "../Pages/testing";

function Search(props: SearchProps) {
  const [view, setview] = useState(false)
  const [val, setval] = useState(false)
  const [value, setvalue] = useState("")
  return (
    < div className="relative" >
      <label className='text-slate-100 font-bold p-5'>
        Select State or District
      </label>
      <div className='w-full flex items-center bg-bgr1 p m-3'>
        <BiSearchAlt className='text-slate-300 px-4 ' size={60} />


        <input
          className='bg-bgr1 outline-none w-full p-5 pl-0 text-blue-400 text-lg font-mono'
          placeholder={props.placeholder}
          onFocus={(e) => {
            props.setShowState(true)
            setview(true)
          }}
          onBlur={() => {
            props.setShowState(false)
            setview(val)
          }}
          onChange={(e) => setvalue(e.target.value)}
        />
      </div>
      <div className={`absolute ${view ? "" : " hidden"} w-full rounded-md h-96 overflow-scroll HideScroll mt-3 z-20`} onMouseOver={() => {
        // console.log("yeah ", val);
        setval(true)
      }} onMouseLeave={() => {
        setval(false)
        // console.log("yeah ", val);
      }}>
        <Testin val={value} />
      </div>

    </div>
  );
}

export default Search;
