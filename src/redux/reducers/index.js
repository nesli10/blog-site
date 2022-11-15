import homePageReducer from "./homePageReducer";
import loginPageReducer from "./loginPageReducer";

import { combineReducers } from "redux";

const reducers = combineReducers({
  photo: homePageReducer,
  login: loginPageReducer,
});

export default reducers;
