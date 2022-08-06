//@ts-nocheck
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { ReactSVG } from "react-svg";
import IndiaMap from "../../DATA/indiaHigh.svg";
import DatamapsIndia from "react-datamaps-india";
import India from "@svg-maps/india";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import ScrollAnimation from "react-animate-on-scroll";
import { PieChart } from "react-minimal-pie-chart";
import ReactApexChart from "react-apexcharts";
import Logo from "../assets/Logo.png";
import { AiOutlinePoweroff } from "react-icons/ai";
import Boxes from "./Boxes";
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
  const [Current, setCurrent] = useState("Odissa");
  const [pievals, setpievals] = useState([44, 55, 13]);

  let States = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  const Options = {
    // plotOptions: {
    //   pie: {
    //     donut: {
    //       size: "65%",
    //     },
    //   },
    // },
    labels: ["ELEMENTERY", "HIGHSCHOOL", "TECHNICAL"],
    colors: ["#4287f5", "#39eaed", "#9e4ca8"],
    chart: {
      width: 380,
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 630,
    },
  };

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
    console.log(import.meta.env.VITE_BASE_URL);

    fetch(import.meta.env.VITE_BASE_URL + "/data/pass-fail", {
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
    <div className='flex items-center bg-bgr'>
      <div className=' px-4 py-6 hidden sm:flex bg-bgr1 h-screen justify-between items-center flex-col'>
        <div className='py-7'>
          <img className='cursor-pointer' src={Logo} width={75} height={75} />
        </div>
        <div className='p-4 bg-slate-500 rounded-lg hover:text-red-400 cursor-pointer'>
          <AiOutlinePoweroff size={40} className='' />
        </div>
      </div>
      <div className='h-screen overflow-x-hidden justify-center items-center flex  pt-32 '>
        <div className='items-center justify-center flex flex-col space-y-5 pt-96 mt-96'>
          <div className=' text-slate-400 font-bold font-serif text-5xl px-5 mt-11'>
            National Educational Database.
          </div>
          <div className='text-slate-500 max-w-xl text-lg px-5'>
            " Endure, Master Wayne. Take it. They’ll hate you for it, but that’s
            the point of Batman, he can be the outcast. He can make the choice
            that no one else can make, the right choice." - Alfred Pennyworth,
            The Dark Knight{" "}
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
          <div className='lg:flex text-slate-400 justify-between pt-20 sm:px-12 p-6 w-screen'>
            <div className='sm:pl-14 font-mono space-y-3'>
              <div className='text-xl flex'>
                <div>Browse through these Data . . .</div>
              </div>
              <Boxes />
              {/* import ScrollAnimation from 'react-animate-on-scroll'; */}
              {/* <ScrollAnimation animateIn='fadeIn'>
              <div className='text-xl text-white'>kjbkbk</div> */}
              {/* </> */}
              <div className='py-9 space-y-10'>
                <h2 className='text-xl w-4/5 h-4 py-8'>
                  GPI INDEX OF {Current}
                </h2>
                <ReactApexChart
                  options={Options as object}
                  series={pievals}
                  type='donut'
                  width={510}
                />
              </div>
              {/* </ScrollAnimation> */}
              {/* <AnimationOnScroll animateIn='animate__bounceIn'></AnimationOnScroll> */}
            </div>
            <div className='w-screen sm:w-1/2'>
              <>
                {/* <p>{stateName}</p>
              <p>{stateCode}</p> */}
                <SVGMap
                  className='IndianMap'
                  map={India}
                  // role
                  onLocationMouseOver={(event) =>
                    ChangeState(event.target.getAttribute("name"))
                  }
                  onLocationClick={(e) => onLocationClick(e)}
                />
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
