//@ts-nocheck
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { ReactSVG } from "react-svg";
import IndiaMap from "../../DATA/indiaHigh.svg";
import DatamapsIndia from "react-datamaps-india";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import LOGO from "../../DATA/in.svg";

interface VAL {
  value: { name: string; value: string };
}

function Home() {
  let placehol = ["Telangana", "Bombay", "Kerala", "Gujarat", "Hyderabad"];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeHoldcount, setplaceHoldcount] = useState(0);
  const [placeholder, setPlaceholder] = useState("");
  const [ShowState, setShowState] = useState(false);
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");

  const onLocationClick = (event: any) => {
    setStateCode(event.target.id);
    setStateName(event.target.getAttribute("name"));
    // console.log(event.target);
    console.log("Id", event.target.id);
    console.log("Name", event.target.getAttribute("name"));
  };

  useEffect(() => {
    const intr = setInterval(() => {
      //   console.log(placeholder, "holder", placeHoldcount);
      setplaceHoldcount(placeHoldcount + 1);
      if (!placehol[placeholderIndex]) {
        console.log(placehol[placeholderIndex], "shoot");
        setPlaceholderIndex(0);
      }
      if (placeHoldcount >= placehol[placeholderIndex].length) {
        setPlaceholderIndex(placeholderIndex + 1);
        setplaceHoldcount(0);
      }
      setPlaceholder(placehol[placeholderIndex].slice(0, placeHoldcount + 1));
    }, 300);
    return () => {
      clearInterval(intr);
    };
  });
  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "/data/pass-fail", {
      method: "POST",
      body: JSON.stringify({
        from: null,
        to: null,
        state: null,
        standard: null,
      }),
    }).then((resp) =>
      console.log(
        resp.json().then((res) => console.log(res, "successss macha")),
        "eheheeh"
      )
    );
  }, []);

  return (
    <div className='h-screen overflow-x-hidden justify-center items-center flex bg-bgr pt-32 '>
      <div className='items-center justify-center flex flex-col space-y-5 pt-96 mt-96'>
        <div className=' text-slate-400 font-bold font-serif text-5xl px-5 mt-11'>
          National Educational Database.
        </div>
        <div className='text-slate-500 max-w-xl text-lg px-5'>
          " Endure, Master Wayne. Take it. They’ll hate you for it, but that’s
          the point of Batman, he can be the outcast. He can make the choice
          that no one else can make, the right choice." - Alfred Pennyworth, The
          Dark Knight{" "}
        </div>
        <div className='  flex-col flex md:w-9/12 space-y-3 max-w-2xl'>
          <label className='text-slate-500 font-bold px-4'>
            Select State or District
          </label>
          <div className='w-full flex items-center bg-bgr1'>
            <BiSearchAlt className='text-slate-500 px-4 ' size={60} />
            <input
              className='bg-bgr1 outline-none w-full p-5 pl-0 text-blue-400 text-lg font-mono'
              placeholder={placeholder}
              onFocus={() => setShowState(true)}
              onBlur={() => setShowState(false)}
            />
          </div>
          <div
            className={`text-blue-400 font-semibold text-lg pl-16 underline ${
              ShowState ? "" : "hidden"
            }  animate-fade`}
          >
            States And Teritories
          </div>
          <div
            className={`flex text-slate-300 text-lg justify-around ${
              ShowState ? "" : "hidden"
            }  animate-fade`}
          >
            <div>
              <ol className='space-y-3 '>
                <dl className='hover:underline cursor-pointer'>Telangana</dl>
                <li className='hover:underline cursor-pointer'>Uppal</li>
                <li className='hover:underline cursor-pointer'>Oddisa</li>
                <li className='hover:underline cursor-pointer'>Jaipu</li>
              </ol>
            </div>
            <div>
              <ol className='space-y-3  '>
                <dl className='hover:underline cursor-pointer'>Andra Pra</dl>
                <li className='hover:underline cursor-pointer'>Punjab</li>
                <li className='hover:underline cursor-pointer'>JAMMU</li>
                <li className='hover:underline cursor-pointer'>Kashmir</li>
              </ol>
            </div>
          </div>
        </div>
        <div className='sm:flex text-slate-400 justify-between pt-20 sm:px-12 p-6 w-screen'>
          <div className='sm:pl-14 font-mono space-y-3'>
            <div className='text-xl flex'>
              <div>Browse through these Data . . .</div>
            </div>
            <div className='BOXES sm:flex  space-x-3'>
              <div className='flex space-x-3'>
                <div className='w-40  h-60 rounded-lg hover:bg-opacity-30 cursor-pointer hover:bg-red-400 bg-opacity-30 items-center justify-center flex font-bold  flex-col'>
                  <div className='text-red-600'>DropOut Percent</div>
                  <div className=''>2022 Stats</div>
                  <div className='pt-5 text-red-700 text-lg'>+5.5 %</div>
                  <div className='text-red-600 text-2xl '>23,000</div>
                </div>
                <div className='w-40  h-60 rounded-lg  bg-green-400 bg-opacity-30 hover:bg-opacity-50 cursor-pointer items-center justify-center flex font-bold  flex-col'>
                  <div className='text-green-600'>EnrolMent Index</div>
                  <div className=''>2022 Stats</div>
                  <div className='pt-5 text-green-700 text-lg'>+5.5 %</div>
                  <div className='text-green-600 text-2xl '>23,000</div>
                </div>
              </div>
              <div className='flex  space-x-3'>
                <div className='w-40  h-60 rounded-lg hover:bg-opacity-30 cursor-pointer hover:bg-blue-400 items-center justify-center flex font-bold  flex-col'>
                  <div className='text-blue-600'>Pass Fail ratio</div>
                  <div className=''>2022 Stats</div>
                  <div className='pt-5 text-blue-700 text-lg'>+5.5 %</div>
                  <div className='text-blue-600 text-2xl '>23,000</div>
                </div>
                <div className='w-40  h-60 rounded-lg hover:bg-opacity-10 cursor-pointer hover:bg-gray-400 items-center justify-center flex font-bold  flex-col'>
                  <div className='text-gray-600'>GP INDEX</div>
                  <div className=''>2022 Stats</div>
                  <div className='pt-5 text-gray-700 text-lg'>+5.5 %</div>
                  <div className='text-gray-600 text-2xl '>23,000</div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-screen sm:w-1/2'>
            <>
              {/* <p>{stateName}</p>
              <p>{stateCode}</p> */}
              <SVGMap
                className='bg-transparent'
                map={India}
                onLocationClick={(e) => onLocationClick(e)}
              />
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
