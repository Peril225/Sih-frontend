import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Signup from "./Components/Signup";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <div className='flex justify-center items-center h-screen text-2xl font-bold text-slate-500'>
                HI MOM
              </div>
            </div>
          }
        ></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
