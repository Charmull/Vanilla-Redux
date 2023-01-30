import { legacy_createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// state는 immutable 해야 함
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  // action 일으키기
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);
