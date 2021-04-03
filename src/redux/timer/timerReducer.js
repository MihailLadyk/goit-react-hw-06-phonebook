import actionTypes from "./timerActionTypes";

const timerReducer = (state = 0, action) => {
  switch (action.type) {
    case "timer/increment":
      return state + action.payload;
    default:
      return state;
  }
};

export default timerReducer;
