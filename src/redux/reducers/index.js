import homePageReducer from "./homePageReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    photo: homePageReducer,
});

export default reducers;