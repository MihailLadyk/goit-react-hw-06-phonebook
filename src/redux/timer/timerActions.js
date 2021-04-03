import * as actionTypes from "./timerActionTypes";

const timerIncrementAction = (step) => {
  return {
    type: actionTypes.increment,
    payload: step,
  };
};

const actions = {
  timerIncrementAction,
};

export default actions;
