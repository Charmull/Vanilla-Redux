import { legacy_createStore as createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

// action creator
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// reducer, createReducer를 사용하면 state를 mutate하게 사용할 수 있음
const reducer = createReducer([], {
  // action이 addToDo일 때
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    // immutable하게도 사용 가능, 다만 어쨌든 상태 object를 return 해주어야 함
    return state.filter((toDo) => toDo.id !== action.payload);
  },
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
