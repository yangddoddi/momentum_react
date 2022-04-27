import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Focus from "./focus,js";

import Clock from "../clock";

function MainItems() {
  const loginState = useSelector((state) => state.loginInput);

  return (
    <section>
      <Clock />
      <p> Hello, {loginState} </p>
      {/* <Focus /> */}
    </section>
  );
}

export default MainItems;
