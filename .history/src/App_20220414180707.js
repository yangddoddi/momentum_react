import React from "react";
import "./App.css";

import LoginPage from "./component/loginpage.js";
import MainPage from "./component/main.js";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/main" exact element={<MainPage />} />
      </Route>
    </div>
  );
}

export default App;
