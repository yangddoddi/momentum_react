import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Focus from "./focus,js";

import Clock from "../clock";

function MainItems(props) {
  const [commend, setCommend] = useState(false);
  const [focusAfter, setFocusAfter] = useState(false);

  const loginState = useSelector((state) => state.loginInputReducer);

  const endCommendHandler = () => {
    setCommend(false);
  };

  useEffect(() => {
    if (commend) {
      setTimeout(endCommendHandler, 2000);
    }
  }, [commend]);

  useEffect(() => {
    if (localStorage.getItem("focus")) {
      setFocusAfter(true);
    }
  }, []);

  return (
    <section>
      <Clock />
      <p> Hello, {loginState} </p>
      <Focus />
    </section>
  );
}

export default MainItems;
