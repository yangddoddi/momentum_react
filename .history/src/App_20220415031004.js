import React from "react";
import "./App.css";

import LoginPage from "./component/loginpage.js";
import MainPage from "./component/main.js";

import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* <TransitionGroup className="transitionGroup" component={null}>
        <TransitionEvent key={location.key} classNames="fade" timeout={2000}> */}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </AnimatePresence>
      {/* </TransitionEvent>
      </TransitionGroup> */}
    </div>
  );
}

export default App;
