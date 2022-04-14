import React from "react";
import "./App.css";

import LoginPage from "./component/loginpage.js";
import MainPage from "./component/main.js";
import { Route, Routes, useLocation } from "react-router-dom";

function Transition() {
  <Routes location={location}>
    <Route path="/" element={<LoginPage />} />
    <Route path="/main" element={<MainPage />} />
  </Routes>;
}

export default Transition;
