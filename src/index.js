import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// data를 modify하는 함수 (reducer, modifier) - state를 modify하는 것은 이 함수 안에서만 가능
const countModifier = (count = 0) => {
  return count;
};

// data를 저장하는 곳
// 처음에 countModifier(reducer)를 통해 state를 initializing
const countStore = legacy_createStore(countModifier);

// app의 data (즉 app이 저장하고 있는 state 중, countStore로 저장하고 있는 state를 출력)
console.log(countStore.getState());
