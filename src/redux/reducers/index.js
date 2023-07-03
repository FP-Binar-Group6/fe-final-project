import { combineReducers } from "@reduxjs/toolkit";
import home from "./home";
import auth from "./auth";


export default combineReducers({
  home,
  auth,
});