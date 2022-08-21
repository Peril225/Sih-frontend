import React, { useEffect, useRef, useState } from "react";
import { IndiaMap, Boxes, PieDonut, SearchState } from "../Components";
import "react-svg-map/lib/index.css";
import { SideBar, Search, ExploreC } from "../layouts";
import { LITRACY, placehol, States } from "../constants/";
import { Testing } from "../utils/Home";
import { useSelector } from "react-redux";
import { STATE } from "../../typings";
import { LITracy } from "../constants/";
import Confetti from "react-dom-confetti";
import Logo from "../assets/Images/Logo.png";
import { useNavigate } from "react-router";
import AnimatedCursor from "react-animated-cursor";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// import Flippy, { FrontSide, BackSide } from "react-flippy";

// const ReactCursorPosition = require("");
import { DropOut } from "../constants";
import { AiOutlinePoweroff } from "react-icons/ai";
import Footer from "../layouts/Footer";
import { FetchStateDropOut } from "../utils/Home/Function";
function Home() {
  const history = useNavigate();
  // const { height, width } = useWindowDimensions();
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeHoldcount, setplaceHoldcount] = useState(0);
  const [placeholder, setPlaceholder] = useState("");
  const [ShowState, setShowState] = useState(false);
  const [animecon, setanimecon] = useState(false);

  const [Explore, setExplore] = useState(false);
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");
  const [Current, setCurrent] = useState("Odissa");
  const [pievals, setpievals] = useState([44, 55, 13]);
  const [Color, setColor] = useState([23, 163, 74]);
  const LOGGED = useSelector((state: STATE) => state.auth.LOGGED);
  const [CurrentSTAT, setCurrentSTAT] = useState("lit");
  const [BARDROPOUT, setBARDROPOUT] = useState()
  const [lit, setlit] = useState()
  const [enroll, setenroll] = useState()

  const SelectedFeature = (Feature: string) => {
    switch (Feature.trim()) {
      case CurrentSTAT:
        break;
      case "dropout":
        setCurrentSTAT("dropout");
        {
          setColor([255, 26, 26]);
        }
        break;
      case "lit":
        setCurrentSTAT("lit");
        {
          setColor([23, 163, 74]);
        }
        break;
      case "enro":
        setCurrentSTAT("enro");
        {
          setColor([39, 199, 235]);
        }
        break;
      case "gpi":
        setCurrentSTAT("gpi");
        {
          setColor([75, 85, 99]);
        }
        break;
      default:
        break;
    }
  };
  // const x = props.position.x;
  // const y = props.position.y;

  const ChangeState = (State: string) => {
    if (Current == State) {
      return;
    }
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
  };

  useEffect(() => {
    // document.getElementById("up")!.style.fill = "#16a34a";
    // console.log(LOGGED, "Look What you have DONE");

    const intr = setInterval(() => {
      // setExplore(!Explore);
      setplaceHoldcount(placeHoldcount + 1);
      if (!placehol[placeholderIndex]) {
        // console.log(placehol[placeholderIndex], "shoot");
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
    fetch(import.meta.env.VITE_BASE_URL + `/static/${CurrentSTAT}/`, {
      method: "POST",
      body: JSON.stringify({
        // year: 2022,
      }),
    }).then((resp) =>
      resp.json().then((res) => {
        // console.log(res, "i mma cry");

        // arr = res;
        res.map((state: any) => {
          document.getElementById(state.State)!.style.fill = `rgba(${Color[0]} , ${Color[1]
            } , ${Color[2]} , ${state.val})`;
        })
      })
    );
  }, [CurrentSTAT]);

  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL + `/static/enroll/`, {
      method: "POST",
      body: JSON.stringify({
        // year: 2022,
      }),
    }).then((resp) =>
      resp.json().then((res) => {
        // console.log(res, "wsjiencfsdfrserwkejndckwn");
        setBARDROPOUT(res)
      })
    );
    fetch(import.meta.env.VITE_BASE_URL + `/static/literacy/`, {
      method: "POST",
      body: JSON.stringify({
        // year: 2022,
      }),
    }).then((resp) =>
      resp.json().then((res) => {
        // console.log(res, "wsjiencfwkejndckwn");
        setenroll(res)
      })
    );
    fetch(import.meta.env.VITE_BASE_URL + `/static/BarDropout/`, {
      method: "POST",
      body: JSON.stringify({
        // year: 2022,
      }),
    }).then((resp) =>
      resp.json().then((res) => {
        // console.log(res, "wsjiencfwkejndckwn");
        setlit(res)
      })
    );
  }, [])


  // const first = useRef(second)

  // const Component = () => <div>yo</div>;

  return (
    <div className='md:flex items-center bg-bgr overflow-hidden'>
      <ExploreC Explore={Explore} setExplore={setExplore} />
      <SideBar setExplore={setExplore} Explore={Explore} />
      <nav>
        <div className='px-5  flex bg-bgr1 w-screen justify-between items-center md:hidden'>
          <div className='py-2'>
            <img
              className='cursor-pointer'
              src={Logo}
              width={75}
              height={75}
              onClick={() => setExplore(true)}
            />
          </div>
          <div
            className='p-2 bg-slate-500 rounded-xl hover:text-red-400 cursor-pointer '
            onClick={() => {
              localStorage.removeItem("auth-token");
              history("/login");
            }}
          >
            <AiOutlinePoweroff size={40} className='' />
          </div>
        </div>
      </nav>

      <div className='h-screen overflow-x-hidden justify-center flex '>
        <div className='items-center  flex flex-col space-y-5  sm:mt-72 mt-20 top-0 animate-fade '>
          <div className=' text-slate-400 font-bold font-serif text-5xl px-3 sm:px-0  w-1/2 md:w-3/4 pl-2 xl:pl-2 lg:w-5/6 flex items-center justify-center'>
            National Educational Database.
          </div>
          <div className='text-slate-500 max-w-xl text-lg px-5 shrink  lg:w-1/2  w-2/3'>
            " Endure, Master Wayne. Take it. They’ll hate you for it, but that’s
            the point of Batman, he can be the outcast. He can make the choice
            that no one else can make, the right choice." - Alfred Pennyworth,
            The Dark Knight{" "}
          </div>
          <div className='  flex-col flex md:w-9/12 space-y-3 max-w-2xl sm:w-1/2'>
            <Search placeholder={placeholder} setShowState={setShowState} />
            <SearchState ShowState={ShowState} />
          </div>
          <div className='xl:flex-row flex text-slate-400 justify-between flex-col  items-center pt-20 sm:px-12 p-6 w-screen'>
            <div className='sm:pl-14 font-mono space-y-3 flex flex-col items-center'>
              <div className='text-xl flex w-full justify-center md:justify-start'>
                <div>Browse through these Data . . .</div>
              </div>
              <Boxes Feature={CurrentSTAT} SelectedFeature={SelectedFeature} />
              <PieDonut
                width={window.innerWidth > 1350 ? 500 : 400}
                labels={["PRIMARY", "SECONDARY", "TECHNICAL"]}
                Current={Current}
                pievals={pievals}
              />
            </div>
            <div className='w-screen sm:w-1/2 sm:pr-7   mr-9'>
              <IndiaMap
                hide={false}
                ChangeState={ChangeState}
                onLocationClick={onLocationClick}
              />
            </div>
          </div>
          <div className='justify-between items-center flex flex-col md:space-y-14 '>
            <div className='text-4xl text-slate-500 font-bold font-mono md:pb-40 pb-20 mt-24 italic '>
              How India Is Performing ...
            </div>
            <div className='xl:flex-row  flex flex-col-reverse  w-screen justify-between pb-10 items-center '>
              <div className=' xl:ml-48 px-5 py-5 xl:px-0 md:py-0 xl:w-3/12 md:w-3/4   flex flex-col '>
                <div>
                  <div className='text-violet-800 font-bold'>HISTORICAL OF</div>
                  <div className='text-slate-300 font-semibold font-mono text-2xl'>
                    DROPOUT RATE IN INDIA
                  </div>
                </div>
                <div className='text-slate-300 font-light font-mono pt-3 '>
                  &nbsp;&nbsp;There has been ups and downs regarding DropOut
                  rate in INDIAN education but in previous years it declining
                  which is a good sign indicating more people are able to
                  complete their education properly
                </div>
              </div>
              <div className='sm:p-3 p-0 rounded-xl border xl:mr-60'>
                <ComposedChart
                  width={window.innerWidth > 642 ? 600 : 450}
                  height={window.innerWidth > 642 ? 350 : 280}
                  data={lit}
                  margin={{
                    top: 20,
                    right: 80,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  {/* <CartesianGrid stroke='#f5f5f5' /> */}
                  <XAxis
                    dataKey='year'
                    label={{
                      value: "Pages",
                      position: "insideBottomRight",
                      offset: 0,
                    }}
                    scale='band'
                  />
                  <YAxis
                    label={{
                      value: "Index",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Area
                    type='monotone'
                    dataKey='GIRLS'
                    fill='#8884d8'
                    stroke='#8884d8'
                  />
                  <Bar
                    dataKey='Total'
                    barSize={20}
                    baseFrequency={5}
                    fill='#413ea0'
                  />
                  <Line type='monotone' dataKey='BOYS' stroke='#ff7300' />
                </ComposedChart>
              </div>
            </div>
            <div className='xl:flex-row  flex-col flex w-screen justify-between pb-10 items-center '>
              <div className='sm:p-3 p-0 rounded-xl border xl:ml-48'>
                <ComposedChart
                  width={window.innerWidth > 642 ? 600 : 450}
                  height={window.innerWidth > 642 ? 350 : 280}
                  data={enroll}
                  margin={{
                    top: 20,
                    right: 80,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <XAxis
                    dataKey='year'
                    label={{
                      value: "Pages",
                      position: "insideBottomRight",
                      offset: 0,
                    }}
                    scale='band'
                  />
                  <YAxis
                    label={{
                      value: "Index",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Area
                    type='monotone'
                    dataKey='GIRLS'
                    fill='#8884d8'
                    stroke='#8884d8'
                  />
                  <Bar
                    dataKey='Total'
                    barSize={20}
                    baseFrequency={5}
                    fill='#413ea0'
                  />
                  <Line type='monotone' dataKey='BOYS' stroke='#ff7300' />
                </ComposedChart>
              </div>
              <div className='xl:w-3/12 md:w-3/4 xl:mr-64 px-3 py-3'>
                <div className='text-violet-800 font-bold'>HISTORICAL OF</div>
                <div className='text-slate-300 font-semibold font-mono text-2xl'>
                  PASS RATE IN INDIA
                </div>
                <div className='text-slate-300 font-light font-mono pt-3'>
                  &nbsp;&nbsp;Over past twenty years india has evolved
                  significant amount from 58% in 2000 to more than 80 indicates
                  more people are completing their education succesfully
                </div>
              </div>
            </div>
            <div className='xl:flex-row  flex flex-col-reverse w-screen justify-between pb-10 items-center '>
              <div className='xl:ml-48 xl:w-3/12 p-3 md:w-3/4'>
                <div className='text-violet-800 font-bold'>HISTORICAL OF</div>
                <div className='text-slate-300 font-semibold font-mono text-2xl'>
                  LITERACY RATE IN INDIA
                </div>
                <div className='text-slate-300 font-light font-mono pt-3'>
                  &nbsp;&nbsp;"A hero can be anyone. Even a man doing something
                  as simple and reassuring as putting a coat around a little
                  boy’s shoulders to let him know that the world hadn’t ended."
                  - Bruce Wayne/Batman, The Dark Knight Rises
                </div>
                {/* <div>Ther</div> */}
              </div>
              <div className='p-3 rounded-xl border xl:mr-60 '>
                <ComposedChart
                  width={window.innerWidth > 642 ? 600 : 450}
                  height={window.innerWidth > 642 ? 350 : 280}
                  data={BARDROPOUT}
                  margin={{
                    top: 20,
                    right: 80,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <XAxis
                    dataKey='year'
                    label={{
                      value: "Pages",
                      position: "insideBottomRight",
                      offset: 0,
                    }}
                    scale='band'
                  />
                  <YAxis
                    domain={[40, "dataMax"]}
                    label={{
                      value: "Index",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Area
                    type='monotone'
                    dataKey='GIRLS'
                    fill='#8884d8'
                    stroke='#8884d8'
                  />
                  <Bar
                    dataKey='Total'
                    barSize={20}
                    baseFrequency={5}
                    fill='#413ea0'
                  />
                  <Line type='monotone' dataKey='BOYS' stroke='#ff7300' />
                </ComposedChart>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
