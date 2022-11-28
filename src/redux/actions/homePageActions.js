import ActionTypes from "../actionTypes";
import axios from "axios";
const setNews = () => {
  return async function (dispatch) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );

    dispatch({ type: ActionTypes.home.SET_NEWS, payload: data });
  };
};

const deleteNews = (id) => ({
  type: ActionTypes.home.DELETE_NEWS,
  payload: id,
});
const addNews = (news) => ({
  type: ActionTypes.home.ADD_NEWS,
  payload: news,
});

const editNews = (news) => {
  return {
    type: ActionTypes.home.EDIT_NEWS,
    payload: news,
  };
  
};

const homePageActions = {
  setNews,
  deleteNews,
  addNews,
  editNews,
};

export default homePageActions;
