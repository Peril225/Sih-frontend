import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Signup from "./Pages/Signup";
import React from "react";
import Signin from "./Pages/Signin";
import Default from "./Pages/Default";
import Home from "./Pages/Home";
// import {Redirect} from 'react-router'
// import  from ;
import { Routes, Route, Navigate } from "react-router-dom";
// App made with vite

import AnimatedCursor from "react-animated-cursor";
import TeacherSTU from "./Pages/TeacherSTU";
import ENrollment from "./Pages/Enrollment";
function App() {
  /*
    React router used for routing 
    default 404 
    current routes = ["/" , "/Signup"]
   */
  return (
    <div>
      <AnimatedCursor color='67, 186, 148' />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Teachers-Students' element={<TeacherSTU />}></Route>
        <Route path='/Enrollmentrate' element={<ENrollment />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Login' element={<Signin />}></Route>
        <Route path='/Dashbard' element={<Default />}></Route>
        {/* default Route */}
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
