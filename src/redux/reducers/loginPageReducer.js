import ActionTypes from "../actionTypes";

const INITIAL_STATE = { token: null, email: null, password: null };

export const loginPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.login.SET_LOGİN:
      return {
        ...state,
        token: action.data.token,
        email: action.data.email,
        password: action.data.password
      }
    default:
      return state;
  }
};
export default loginPageReducer;
