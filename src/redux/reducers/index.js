import homePageReducer from "./homePageReducer";
import loginPageReducer from "./loginPageReducer";
import adminPageReducer from "./adminPageReducer";

import { combineReducers } from "redux";

const reducers = combineReducers({
  photo: homePageReducer,
  login: loginPageReducer,
  adminPageReducer,
});

export default reducers;
