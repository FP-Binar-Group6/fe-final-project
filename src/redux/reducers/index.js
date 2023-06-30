import { combineReducers } from "@reduxjs/toolkit";
import post from "./post";
import auth from "./auth";
import user from "./user"


export default combineReducers({
  post,
  auth,
  user,
});