
import ActionTypes from "../actionTypes";
const setNews= (data) => {

    return {type:ActionTypes.home.SET_NEWS,payload: data}
   

};

const homePageActions ={
    setNews,
}

export default homePageActions;