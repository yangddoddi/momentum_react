import React from "react";

let userLoginState;

if (!localStorage.getItem("userId")) {
  userLoginState = false;
}

const loginReducer = function (state = userLoginState, action) {
  const setLoginState = state;
  switch (action.type) {
    case "LOGIN":
      return (setLoginState = true);
  }
  return setLoginState;
};

export { loginReducer };
