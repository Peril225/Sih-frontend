import "./App.css";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Default from "./Pages/Default";
import Home from "./Pages/Home";
// import {Redirect} from 'react-router'
// import  from ;
import { Routes, Route, Navigate } from "react-router-dom";
// App made with vite

import TeacherSTU from "./Pages/TeacherSTU";
import ENrollment from "./Pages/Enrollment";
import Passfail from "./Pages/passFail";
import Out_Turn from "./Pages/Out-turn";
import CasteBased from "./Pages/CasteBased";
import GPI from "./Pages/GPI";
import DropOut from "./Pages/DropOut";
import LiteracyRate from "./Pages/Literacy";
import Standard from "./Pages/Standard";

function App() {
  /*
    React router used for routing 
    default 404 
    current routes = ["/" , "/Signup"]
   */
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Teachers-Students' element={<TeacherSTU />}></Route>
        <Route path='/Enrollmentrate' element={<ENrollment />}></Route>
        <Route path='/PassFail' element={<Passfail />}></Route>
        <Route path='/OutTurn' element={<Out_Turn />}></Route>
        <Route path='/DROPOUT' element={<DropOut />}></Route>
        <Route path='/LiteracyRate' element={<LiteracyRate />}></Route>
        <Route path='/GPI' element={<GPI />}></Route>
        <Route path='/CasteBased' element={<CasteBased />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Login' element={<Signin />}></Route>
        <Route path='/Dashbard' element={<Default />}></Route>
        {/* <Route path='/test' element={<Testin />}></Route> */}
        {/* default Route */}
        <Route path='/levels/:level' element={<Standard />}></Route>
        <Route path='/State/:states' element={<State />}></Route>
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
