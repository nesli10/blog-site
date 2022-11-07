import ActionTypes from "../actionTypes";

const INITIAL_STATE = []
   
   
   export const homePageReducer = (state=INITIAL_STATE, action) => {
       switch (action.type) {
        case ActionTypes.home.SET_NEWS: 
        return  action.payload
        default:
             return state;
       }
   };
   export default homePageReducer;