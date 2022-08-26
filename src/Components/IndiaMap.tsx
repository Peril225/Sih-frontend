import React, { useEffect, useRef, useState } from "react";
import { SVGMap } from "react-svg-map";
import India from "@svg-maps/india";
import { IndiaMap } from "../../typings";
// <<<<<<< HEAD
import { DATABOX } from "../constants";

// =======
import { useNavigate } from "react-router";

export default function Indiamap(props: IndiaMap) {
  const [hide, sethide] = useState(true);
  const [X, setX] = useState(0);
  const history = useNavigate()
  const [Y, setY] = useState(0);

  const [CurrentState, setCurrentState] = useState<any>();
  const [height, setHeight] = useState(0);
  const [Width, setWidth] = useState(0);
  const ref = useRef(null);

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
          onLocationMouseMove={(event) => {
            setX(event.clientX);
            setY(event.clientY);
            sethide(false);
            // console.log(event.pageX, event.pageY);
            setCurrentState(event.target.getAttribute("name"));
            !props.hide
              ? props.ChangeState(event.target.getAttribute("name"))
              : null;
          }}
          onLocationClick={(e) => {
            props.onLocationClick(e)
            history(`/state/${e.target.getAttribute("id")}`)
          }}
          onLocationMouseOut={() => {
            // setW(0);
            sethide(true);
            // setH(0);
          }}
          onLocationMouseOver={() => {
          }}
        // onLocationMouseMove={(event) => {
        //   sethide(false);
        // props.ChangeState(event.target.getAttribute("name"));
        // }}
        />
        {/* <div style={{
            position: "absolute",
            // left : Width,
            left: X - Width - 20,
            top: Y - height - 20,
            background: "white",
          }}>
          hisajebhdcijsa
        </div> */}
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
            <div>DropOut Rate : {CurrentState && hide ? DATABOX[CurrentState][0] : ""}%</div>
            <div>Literacy Rate : {CurrentState && hide ? DATABOX[CurrentState][1] : ""}%</div>
            <div>PASS Rate : {CurrentState && hide ? DATABOX[CurrentState][2] : ""}%</div>
            <div>GP INDEX : {CurrentState && hide ? DATABOX[CurrentState][3] : ""}</div>
          </div>
        </div>
      </div>
    </>
  );
}
