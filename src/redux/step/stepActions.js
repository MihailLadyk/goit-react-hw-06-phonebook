import actionTypes from "./stepActionsTypes";

const change = (step) => {
  return {
    type: actionTypes.change,
    payload: step,
  };
};

const actions = {
    change
}


export default actions