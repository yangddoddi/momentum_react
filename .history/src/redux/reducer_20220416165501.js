const loginInputReducer = function (state, action) {
  if (!state) {
    state = [];
  }
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

export { loginInputReducer };
