import React from "react";
import "./App.css";

import LoginPage from "./component/loginpage.js";
import MainPage from "./component/main.js";
import backgroundImg from "./component/backgroundImg";

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
