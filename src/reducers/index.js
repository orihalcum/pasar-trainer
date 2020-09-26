import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import company from "./company";

export default combineReducers({
  auth,
  message,
  company
});