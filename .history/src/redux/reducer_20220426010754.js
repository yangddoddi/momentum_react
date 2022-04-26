import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "TODO",
  storage,
  whiteList: ["todoReducer"],
};

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

const todoReducer = function (state = [], action) {
  console.log(action.payload);
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

export const rootReducer = combineReducers({ loginInputReducer, todoReducer });

export default persistReducer(loginInputReducer, rootReducer);
