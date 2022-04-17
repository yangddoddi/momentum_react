const loginInputReducer = function (state, action) {
  switch (action.type) {
    case "TYPING":
      return (state = action.payload);
    case "SUBMIT":
      return (state = "");
    default:
      return (state = "");
  }
};

const clockReducer = function (state, action) {
  switch (action.type) {
    case "RENEW":
      return (state = action.payload);
    default:
      return state;
  }
};

export { loginInputReducer };
