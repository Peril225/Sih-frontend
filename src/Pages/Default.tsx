import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

function Default() {
  let history = useNavigate();
  useEffect(() => {
    const jwt = localStorage.getItem("auth-token");
    console.log(jwt);

    if (!jwt) {
      history("/");
    }
  }, []);

  return (
    <div>
      <div className='w-screen h-screen'>
        <ReactSVG
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
            console.log(svg);
          }}
          beforeInjection={(svg) => {
            svg.classList.add("svg-class-name");
            svg.setAttribute("style", "width: 200px");
          }}
          className='wrapper-class-name'
          evalScripts='always'
          fallback={() => <span>Error!</span>}
          httpRequestWithCredentials={true}
          loading={() => <span>Loading</span>}
          onClick={() => {
            console.log("wrapper onClick");
          }}
          renumerateIRIElements={false}
          src='../../DATA/in.svg'
          useRequestCache={false}
          wrapper='span'
        />
      </div>
    </div>
  );
}

export default Default;
