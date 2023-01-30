import { legacy_createStore as createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

/*
// createSlice 사용 전

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
*/

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

// default가 추가된 store, redux developer tools(구글 확장 프로그램)를 편리하게 사용 가능
const store = configureStore({ reducer: toDos.reducer });

/*
// createSlice 사용 전
export const actionCreators = {
  addToDo,
  deleteToDo,
};
*/

export const { add, remove } = toDos.actions;

export default store;
