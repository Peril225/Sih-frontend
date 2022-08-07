import { createStore, applyMiddleware, combineReducers, Store } from "redux";
// import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import login from "./Login/reducer";
import { STATE } from "../../typings";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// import { composeWithDevTools } from "redux-devtools-extension";
const reducer = combineReducers({
  auth: login,
});

const store = configureStore({ reducer: reducer });

export default store;
