const loginInputReducer = function (state, action) {
  if (!state) {
    state = [];
  }
  switch (action.type) {
    case "TYPING":
      return State.concat(action.payload);
    case "SUBMIT":
      return (setState = "");
    default:
      return (setState = "");
  }
};

export { loginInputReducer };
