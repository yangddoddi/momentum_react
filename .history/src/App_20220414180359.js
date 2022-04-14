import React from "react";
import "./App.css";

import LoginPage from "./component/loginpage.js";
import MainPage from "./component/main.js";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route>
        <LoginPage />
      </Route>
      <Route>
        <MainPage />
      </Route>
    </div>
  );
}

export default App;
