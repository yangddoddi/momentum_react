import { act } from "react-dom/test-utils";

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

const quoteReducer = function (state, action) {
  switch (action.type) {
    case "HOVER":
      return (state = true);
  }
};

export { loginInputReducer, clockReducer };
