import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
  const id = parseInt(useParams().id);
  const toDo = toDos.find((toDo) => toDo.id === id);
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>created at: {toDo?.id}</h5>
    </>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(Detail);
