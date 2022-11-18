import ActionTypes from "../actionTypes";
import axios from "axios";
const setLogin =
  ({ email, password }) =>
  (dispatch) => {
    axios
      .post("https://vega-gts-be.mahrek.com.tr/login", {
        email,
        password,
      })
      .then((response) => {
        dispatch(
          setLoginFulfilled({
            token: response.data,
            email,
            password,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

const setLoginFulfilled = (data) => ({
  type: ActionTypes.login.SET_LOGİN,
  data,
});

const loginPageActions = {
  setLogin,
};

export default loginPageActions;
