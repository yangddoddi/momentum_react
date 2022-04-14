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

        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            classNames="tabAnimation"
            timeout={1000}
          >
            <Routes location={location}>
              <Route path="/" exact element={<LoginPage />} />
              <Route path="/main" exact element={<MainPage />} />
            </Routes>
          </CSSTransition>
    </div>
  );
}

export default App;
