import React, { useEffect, useRef, useState } from "react";
import { SVGMap } from "react-svg-map";
import India from "@svg-maps/india";
import { IndiaMap } from "../../typings";

export default function Indiamap(props: IndiaMap) {
  const [hide, sethide] = useState(true);
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [CurrentState, setCurrentState] = useState();
  const [height, setHeight] = useState(0);
  const [Width, setWidth] = useState(0);
  const ref = useRef(null);

  const [DROP, setDROP] = useState(0);
  const [LIT, setLIT] = useState(0);
  const [PASS, setPASS] = useState(0);
  const [GPI, setGPI] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current["clientWidth"]);
      setHeight(ref.current["clientHeight"]);
    }
  });

  return (
    <>
      <div>
        <SVGMap
          className='IndianMap '
          map={India}
          onLocationFocus={(event) =>
            props.hide
              ? props.ChangeState(event.target.getAttribute("name"))
              : null
          }
          // role
          onLocationMouseMove={(event) => {
            // setW(100);
            // setH(100);
            setX(event.clientX);
            setY(event.clientY);
            sethide(false);
            // console.log(event.pageX, event.pageY);
            setCurrentState(event.target.getAttribute("name"));
            !props.hide
              ? props.ChangeState(event.target.getAttribute("name"))
              : null;
          }}
          onLocationClick={(e) => props.onLocationClick(e)}
          onLocationMouseOut={() => {
            // setW(0);
            sethide(true);
            // setH(0);
          }}
          onLocationMouseOver={() => {
            setDROP(Math.floor(Math.random() * 20));
            setLIT(Math.floor(Math.random() * 20 + 80));
            setPASS(Math.floor(Math.random() * 20 + 70));
            setGPI(Math.floor(Math.random() * 20 + 30));
          }}
        // onLocationMouseMove={(event) => {
        //   sethide(false);
        // props.ChangeState(event.target.getAttribute("name"));
        // }}
        />
        <div
          className='DailogeBOX w-auto h-auto rounded-lg text-gray-300 font-bold font-mono flex transition transform justify-center items-center delay-150 text-xl p-14  duration-300 ease-in-out animate-fade'
          style={{
            position: "absolute",
            display: hide || props.hide ? "none" : "flex",
            left: X - Width - 20,
            top: Y - height - 20,
            background: "#a9c4c7",
          }}
          ref={ref}
        >
          <div>
            <div className='pr-5 pb-4 text-3xl'>Stats of {CurrentState}</div>{" "}
            <div>DropOut Rate : {DROP}%</div>
            <div>Literacy Rate : {LIT}%</div>
            <div>PASS Rate : {PASS}%</div>
            <div>GP INDEX : {GPI}</div>
          </div>
        </div>
      </div>
    </>
  );
}
