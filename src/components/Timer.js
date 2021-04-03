import { connect } from "react-redux";
import  timerActions  from "../redux/timer/timerActions";
function Timer({ increment, value }) {
  return (
    <div>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <p>{value}</p>
      <input type='number'></input>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.timer,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    increment: () => dispatch(timerActions.timerIncrementAction(5)),
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(Timer);
