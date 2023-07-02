import { combineReducers } from "@reduxjs/toolkit";
import post from "./post";
import auth from "./auth";
import history from "./history";
import notif from "./notif";

export default combineReducers({
  history,
  notif,
  post,
  auth,
});
