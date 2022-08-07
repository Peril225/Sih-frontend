import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { IndiaMap, Boxes, PieDonut, SearchState } from "../Components";
import "react-svg-map/lib/index.css";
import { SideBar, Search } from "../layouts";
import { placehol, States } from "../constants/";
import { Testing } from "../utils/Home";

function Home() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeHoldcount, setplaceHoldcount] = useState(0);
  const [placeholder, setPlaceholder] = useState("");
  const [ShowState, setShowState] = useState(false);
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");
  const [Current, setCurrent] = useState("Odissa");
  const [pievals, setpievals] = useState([44, 55, 13]);

  const ChangeState = (State: string) => {
    setpievals([
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ]);
    setCurrent(State);
  };

  const onLocationClick = (event: any) => {
    setStateCode(event.target.id);
    setStateName(event.target.getAttribute("name"));
    console.log("Id", event.target.id);
    console.log("Name", event.target.getAttribute("name"));
  };

  useEffect(() => {
    const intr = setInterval(() => {
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
    const pievals = setInterval(() => {
      setpievals([
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
      ]);
      setCurrent(States[Math.floor(Math.random() * States.length)]);
    }, 800);
    return () => {
      clearInterval(pievals);
      clearInterval(intr);
    };
  });
  useEffect(() => {
    Testing();
  }, []);

  return (
    <div className='flex items-center bg-bgr'>
      <SideBar />
      <div className='h-screen overflow-x-hidden justify-center items-center flex  pt-32 '>
        <ScrollAnimation animateIn='fadeIn'>
          <div className='items-center justify-center flex flex-col space-y-5 pt-96 mt-96 animate-fade'>
            <div className=' text-slate-400 font-bold font-serif text-5xl px-5 mt-11'>
              National Educational Database.
            </div>
            <div className='text-slate-500 max-w-xl text-lg px-5'>
              " Endure, Master Wayne. Take it. They’ll hate you for it, but
              that’s the point of Batman, he can be the outcast. He can make the
              choice that no one else can make, the right choice." - Alfred
              Pennyworth, The Dark Knight{" "}
            </div>
            <div className='  flex-col flex md:w-9/12 space-y-3 max-w-2xl'>
              <Search placeholder={placeholder} setShowState={setShowState} />
              <SearchState ShowState={ShowState} />
            </div>
            <div className='lg:flex text-slate-400 justify-between pt-20 sm:px-12 p-6 w-screen'>
              <div className='sm:pl-14 font-mono space-y-3'>
                <div className='text-xl flex'>
                  <div>Browse through these Data . . .</div>
                </div>
                <Boxes />
                <PieDonut Current={Current} pievals={pievals} />
              </div>
              <div className='w-screen sm:w-1/2'>
                <IndiaMap
                  ChangeState={ChangeState}
                  onLocationClick={onLocationClick}
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Home;
