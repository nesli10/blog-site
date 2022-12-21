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
          {
            id: action.payload.newDate,
            url: newPhoto.thumbUrl,
            thumbnailUrl: newPhoto.thumbnailUrl,
            albumId: newPhoto.uid,
            title: action.payload.title,
          },
          ...state.photo,
        ],
      };
    case ActionTypes.home.EDIT_NEWS:
      const newPhotos = state.photo.map((photo) => {
        if (photo.id === action.payload.id) {
          return {
            ...photo,
            title: action.payload.title,
            url: action.payload.thumbnailUrl,
            thumbnailUrl: action.payload.thumbnailUrl,
          };
        }
        return photo;
      });
      return {
        ...state,
        photo: newPhotos,
      };
    default:
      return state;
  }
};
export default homePageReducer;

