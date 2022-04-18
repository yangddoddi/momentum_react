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

let clockState = { hour: "00", minute: "00" };

const clockReducer = function (state = clockState, action) {
  switch (action.type) {
    case "RENEW":
      return (state = action.payload.time);
    default:
      return state;
  }
};

let geolocationReducer = function (state, action) {
  switch (action.type) {
    case "SUCCESS":
      return (state = "success");
    case "ERROR":
      return (state = "error");
    default:
      return (state = "error");
  }
};

export { loginInputReducer, clockReducer, geolocationReducer };
