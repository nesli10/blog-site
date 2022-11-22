import ActionTypes from "../actionTypes";

const INITIAL_STATE = {
  photo: [],
};

export const homePageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.home.SET_NEWS:
      return {
        ...state,
        photo: action.payload,
      };
    case ActionTypes.home.DELETE_NEWS:
      return {
        ...state, // destruct
        photo: state.photo.filter((photo) => photo.id !== action.payload),
      };
    case ActionTypes.home.ADD_NEWS:
        const newPhoto = action.payload.photo;
      return {
        ...state, 
        photo: [
            ...state.photo,
            {
                id: action.payload.newDate,
                url: newPhoto.thumbUrl,
                albumId: newPhoto.uid,
                thumbnailUrl: newPhoto.thumbUrl,
                title: action.payload.title
            }
        ],
      };

    default:
      return state;
  }
};
export default homePageReducer;
