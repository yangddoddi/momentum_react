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

let quoteState = false;

const quoteReducer = function (state = quoteState, action) {
  switch (action.type) {
    case "MOUSE_OVER":
      return (state = true);
    case "MOUSE_LEAVE":
      return (state = false);
    default:
      return state;
  }
};

export { loginInputReducer, clockReducer, quoteReducer };
