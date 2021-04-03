import actionTypes from "./stepActionsTypes";

const stepReducer = (state = 1, action) => {
  switch (action.type) {
    case actionTypes.change:
      return action.payload;

    default:
      return state;
  }
};

export default stepReducer;
