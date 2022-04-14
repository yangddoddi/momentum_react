import React, { useEffect } from "react";
import "./App.css";

import LoginPage from "./component/loginpage.js";
import MainPage from "./component/main.js";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("userId") == true
      ? navigate("./main")
      : navigate("./login");
  });

  return (
    <div className="App">
      <TransitionGroup className="transitionGroup">
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
