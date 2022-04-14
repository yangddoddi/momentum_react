import React from "react";
import "./App.css";

import LoginPage from "./component/loginpage.js";
import MainPage from "./component/main.js";

import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <CSSTransition in={true} classNames="tabAnimation" timeout={1000}>
          <Routes>
            <Route path="/" exact element={<LoginPage />} />
            <Route path="/main" exact element={<MainPage />} />
          </Routes>
        </CSSTransition>
      </HashRouter>
    </div>
  );
}

export default App;
