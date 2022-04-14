import React from "react";
import "./App.css";

import LoginPage from "./component/loginpage.js";
import MainPage from "./component/main.js";

import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <TransitionGroup className="transitionGroup">
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Route />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
