import ActionTypes from "../actionTypes";

export const deleteItem = (data) => {
    return{type:ActionTypes.admin.deleteItem,payload:data}
  };

  const adminPageActions ={
    deleteItem,
}

export default adminPageActions;