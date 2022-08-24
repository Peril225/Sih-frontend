import { combineReducers } from "redux";
// import { HYDRATE, createWrapper } from "next-redux-wrapper";
import login from "./Login/reducer";
import { configureStore } from "@reduxjs/toolkit";


// import { composeWithDevTools } from "redux-devtools-extension";
const reducer = combineReducers({
  auth: login,
});

const store = configureStore({ reducer: reducer });

export default store;
