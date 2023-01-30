import { useState } from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux"; // 최신 기술 (앞으로 사용 추천)

const Home = ({ toDos }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type={"text"} value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};

// redux state로부터 compoenet에 prop으로써 전달
const mapStateToProps = (state, ownProps) => {
  return { toDos: state };
};

// mapStateToProps의 return값이 component(Home)의 prop에 추가됨
export default connect(mapStateToProps)(Home);
