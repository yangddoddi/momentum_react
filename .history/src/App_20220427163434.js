import React from "react";

import LoginPage from "./component/loginPage/loginpage.js";
import MainPage from "./component/mainPage/main.js";

import GlobalStyle from "./styledComponets/globalSetting";

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";

import theme from "./theme.js";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" exact element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
