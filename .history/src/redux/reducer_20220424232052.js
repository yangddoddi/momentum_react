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

const todoReducer = function (state = [], action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat(action.payload);
    case "CHECK":
      console.log(action.payload);
      console.log(state);
      return state.map((todo) =>
        todo.id === action.payload.id ? !todo.done : todo.done
      );
    default:
      return state;
  }
};

export { loginInputReducer, clockReducer, todoReducer };
