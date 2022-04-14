import React from "react";
import "./App.css";

import LoginPage from "./component/loginpage.js";
import MainPage from "./component/main.js";

import { Route, Routes, useLocation } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <HashRouter>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            in={true}
            classNames="tabAnimation"
            timeout={1000}
          >
            <Routes>
              <Route path="/" exact element={<LoginPage />} />
              <Route path="/main" exact element={<MainPage />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </HashRouter>
    </div>
  );
}

export default App;
