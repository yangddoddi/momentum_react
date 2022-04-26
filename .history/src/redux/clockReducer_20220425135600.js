let clockState = { hour: "00", minute: "00" };

const clockReducer = function (state = clockState, action) {
  switch (action.type) {
    case "RENEW":
      return (state = action.payload.time);
    default:
      return state;
  }
};

export default clockReducer;
