let userLoginState;

if (!localStorage.getItem("userId")) {
  userLoginState = false;
}

const loginInputReducer = function (state, action) {
  let setState = state;
  switch (action.type) {
    case "TYPING":
      return (setState = action.payload);
    case "SUBMIT":
      return (setState = "");
    default:
      return (setState = "");
  }
};

export { loginReducer };
