import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Signup from "./Components/Signup";
import React from "react";

import { Routes, Route } from "react-router-dom";
// App made with vite

function App() {
  /*
    React router used for routing 
    default 404 
    current routes = ["/" , "/Signup"]
   */
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <div className='flex flex-col justify-center items-center h-screen text-2xl font-bold text-slate-500'>
                <div>HI MOM</div>

                <a href='/Signup' className='underline'>
                  SIGNUP
                </a>
              </div>
            </div>
          }
        ></Route>

        <Route path='/Signup' element={<Signup />}></Route>

        {/* default Route */}
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
