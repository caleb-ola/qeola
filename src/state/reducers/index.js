import { combineReducers } from "redux";
import clientReducer from "./firstReducers";

const reducers = combineReducers({
  clients: clientReducer,
});

export default reducers;
