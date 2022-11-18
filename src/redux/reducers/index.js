import homePageReducer from "./homePageReducer";
import loginPageReducer from "./loginPageReducer";


import { combineReducers } from "redux";

const reducers = combineReducers({
  homeReducer: homePageReducer,
  login: loginPageReducer,
 
});

export default reducers;
