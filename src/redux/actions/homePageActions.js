
import ActionTypes from "../actionTypes";
import axios from "axios";
const setNews=  () => {
     return async function (dispatch){
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/photos"
          );

          dispatch({type:ActionTypes.home.SET_NEWS,payload:data})
     }

  

   
   

};

const homePageActions ={
    setNews,
}

export default homePageActions;