import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import LOGO from "../assets/Images/kcr.png";
import { IndiaMap, Boxes, PieDonut, SearchState } from "../Components";
import "react-svg-map/lib/index.css";
import { SideBar, Search, ExploreC } from "../layouts";
import { placehol, States } from "../constants/";
import { Testing } from "../utils/Home";
import { useSelector } from "react-redux";
import { STATE } from "../../typings";
import { StatesXcolor } from "../constants/";

// import Flippy, { FrontSide, BackSide } from "react-flippy";

// const ReactCursorPosition = require("");
function Home() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeHoldcount, setplaceHoldcount] = useState(0);
  const [placeholder, setPlaceholder] = useState("");
  const [ShowState, setShowState] = useState(false);

  const [Explore, setExplore] = useState(false);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");
  const [Current, setCurrent] = useState("Odissa");
  const [pievals, setpievals] = useState([44, 55, 13]);
  const [Color, setColor] = useState([23, 163, 74]);
  const LOGGED = useSelector((state: STATE) => state.auth.LOGGED);
  const [CurrentSTAT, setCurrentSTAT] = useState("LIT");

  const SelectedFeature = (Feature: string) => {
    switch (Feature.trim()) {
      case CurrentSTAT:
        break;
      case "DROP":
        setCurrentSTAT("DROP");
        {
          setColor([255, 26, 26]);
        }
        break;
      case "LIT":
        setCurrentSTAT("LIT");
        {
          setColor([23, 163, 74]);
        }
        break;
      case "PASS":
        setCurrentSTAT("PASS");
        {
          setColor([39, 199, 235]);
        }
        break;
      case "GPI":
        setCurrentSTAT("GPI");
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
    console.log("Id", event.target.id);
    console.log("Name", event.target.getAttribute("name"));
  };

  useEffect(() => {
    // document.getElementById("up")!.style.fill = "#16a34a";
    // console.log(LOGGED, "Look What you have DONE");

    const intr = setInterval(() => {
      // setExplore(!Explore);
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
    StatesXcolor.map((state) => {
      console.log(state);
      document.getElementById(state.State)!.style.fill = `rgba(${Color[0]} , ${
        Color[1]
      } , ${Color[2]} , ${Math.random() * 0.62 + 0.33})`;
    });
  }, [Color]);

  const CardStyle = {
    border: "1px solid black",
    padding: "20px",
    margin: "20px",
    width: "200px",
    height: "300px",
  };

  // const Component = () => <div>yo</div>;

  return (
    <div className='flex items-center bg-bgr '>
      <ExploreC Explore={Explore} setExplore={setExplore} />
      <SideBar setExplore={setExplore} Explore={Explore} />
      <div className='h-screen overflow-x-hidden justify-center items-center flex  pt-44 '>
        {/* <ScrollAnimation animateIn='fadeIn'> */}
        <div className='items-center justify-center flex flex-col space-y-5 pt-96 mt-96 animate-fade'>
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
            <Search placeholder={placeholder} setShowState={setShowState} />
            <SearchState ShowState={ShowState} />
          </div>
          <div className='lg:flex text-slate-400 justify-between pt-20 sm:px-12 p-6 w-screen'>
            <div className='sm:pl-14 font-mono space-y-3'>
              <div className='text-xl flex'>
                <div>Browse through these Data . . .</div>
              </div>
              <Boxes Feature={CurrentSTAT} SelectedFeature={SelectedFeature} />
              <PieDonut Current={Current} pievals={pievals} />
            </div>
            <div className='w-screen sm:w-1/2 pr-7 mr-9'>
              <IndiaMap
                ChangeState={ChangeState}
                onLocationClick={onLocationClick}
              />
            </div>
          </div>
          <div className='text-4xl text-slate-500 font-bold font-mono pb-40 mt-5'>
            How India Is Performing ...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
