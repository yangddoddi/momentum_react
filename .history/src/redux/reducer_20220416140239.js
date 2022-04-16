import React from "react";

let userLoginState;

if (!localStorage.getItem("userId")) {
  userLoginState = false;
}

const loginReducer = function (state = userLoginState, action) {
  let setLoginState = state;
  switch (action.type) {
    case "LOGIN":
      return (setLoginState = true);
    case "LOGOUT":
      return (setLoginState = false);
    default:
      return (setLoginState = false);
  }
};

const loginInputReducer = function (state, action) {
  let setState = state;
  switch (action.type) {
    case "TYPING":
      return (setState = action.payload);
    case "SUBMIT":
      return (setState = "");
  }
};

export { loginReducer };
