import { combineReducers } from "redux";
import app from "./app/reducer";

const allReducers = combineReducers({
  app
});

export default allReducers;
