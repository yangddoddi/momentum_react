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

const savedTodo = JSON.parse(localStorage.getItem("TODO"));
const todo = savedTodo ? [savedTodo] : [];

const todoReducer = function (state = todo, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat(action.payload);
    case "CHECK":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};

export { loginInputReducer, clockReducer, todoReducer };
