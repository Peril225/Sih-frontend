//@ts-nocheck

import React from "react";
import { SVGMap } from "react-svg-map";
import India from "@svg-maps/india";
import { IndiaMap } from "../../typings";

export default function Indiamap(props: IndiaMap) {
  return (
    <>
      {/* <p>{stateName}</p>
<p>{stateCode}</p> */}
      <SVGMap
        className='IndianMap'
        map={India}
        // role
        onLocationMouseOver={(event) =>
          props.ChangeState(event.target.getAttribute("name"))
        }
        onLocationClick={(e) => props.onLocationClick(e)}
      />
    </>
  );
}
