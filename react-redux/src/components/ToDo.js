import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { actionCreators } from "../storeToolkit";
import { remove } from "../storeToolkit";

const ToDo = ({ text, onBtnClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
