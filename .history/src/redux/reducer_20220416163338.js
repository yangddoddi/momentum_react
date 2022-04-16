let login = "";

const loginInputReducer = function (state = login, action) {
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
