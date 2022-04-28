import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "LOCAL_ITEMS",
  storage,
  blacklist: ["OPEN_EMAIL", "CLOSE_EMAIIL"],
};

const loginInputReducer = function (state = "", action) {
  switch (action.type) {
    case "LOGIN_ID":
      return (state = action.payload);
    case "SUBMIT":
      return (state = "");
    default:
      return state;
  }
};

const todoReducer = function (state = [], action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat(action.payload);
    case "CHECK":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "SHOW_DONE":
      return state.map((todo) =>
        !todo.done && todo.visible ? { ...todo, visible: !todo.visible } : todo
      );
    case "SHOW_ALL":
      return state.map((todo) =>
        !todo.visible ? { ...todo, visible: !todo.visible } : todo
      );
    default:
      return state;
  }
};

const emailReducer = function (state = false, action) {
  switch (action.type) {
    case "OPEN_EMAIL":
      return (state = true);
    case "CLOSE_EMAIL":
      return (state = false);
    default:
      return (state = false);
  }
};

const rootReducer = combineReducers({ loginInputReducer, todoReducer });

export default persistReducer(persistConfig, rootReducer);
