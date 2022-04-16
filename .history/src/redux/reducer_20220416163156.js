const loginInputReducer = function (state, action) {
  let state = "";
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
