import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Focus from "./focus,js";

import Clock from "../clock";

function MainItems() {
  const [commend, setCommend] = useState(false);
  const [focusAfter, setFocusAfter] = useState(false);

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
      <Focus
        focusAfter={focusAfter}
        setFocusAfter={setFocusAfter}
        commend={commend}
        setCommend={setCommend}
      />
    </section>
  );
}

export default MainItems;
