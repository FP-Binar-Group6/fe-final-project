import { combineReducers } from "@reduxjs/toolkit";
import post from "./post";
import auth from "./auth";
import booking from "./booking"


export default combineReducers({
  post,
  auth,
  booking,
});