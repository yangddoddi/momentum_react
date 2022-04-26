import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { loginInputReducer, clockReducer, todoReducer } from "./redux/reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { HashRouter } from "react-router-dom";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const store = createStore(combineReducers({ loginInputReducer, todoReducer }));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
