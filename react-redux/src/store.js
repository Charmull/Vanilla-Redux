import { legacy_createStore as createStore } from "redux";

// action
const ADD = "ADD";
const DELETE = "DELETE";

// action creator
const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

// // challenge
// localStorage.getItem("toDos") !== [] ? (
//   <></>
// ) : (
//   localStorage.setItem("toDos", JSON.stringify([]))
// );

// challenge : state = JSON.parse(localStorage.getItem("toDos"))
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const newToDoObj = { text: action.text, id: Date.now() };
      //   localStorage.setItem("toDos", JSON.stringify([newToDoObj, ...state]));
      return [newToDoObj, ...state];
    case DELETE:
      const delToDos = state.filter((toDo) => toDo.id !== action.id);
      //   localStorage.setItem("toDos", JSON.stringify(delToDos));
      return delToDos;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
