import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import home from "./home";
import search from "./search";
import booking from "./booking";

export default combineReducers({
  auth,
  home,
  search,
  booking,
});
