import { combineReducers } from "@reduxjs/toolkit";
import home from "./home";
import auth from "./auth";
import booking from "./booking"
import user from "./user"


export default combineReducers({
  home,
  auth,
  booking,
  user,
});