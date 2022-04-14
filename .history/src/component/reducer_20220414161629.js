import React from "react";

let defaultState;

if (!localStorage.getItem("userId")) {
  defaultState = false;
}

const loginReducer = function (state = defaultState, action) {
  const setLoginState = state;
  if (action.type === "login") {
    setLoginState = true;
  }
  return setLoginState;
};
