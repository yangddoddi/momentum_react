import React from "react";
import "../css/App.css";

function backgroundImg() {
  const backgroundImg = [
    "background1",
    "background2",
    "background3",
    "background4",
    "background5",
  ];

  document.querySelector(
    ".App"
  ).style.backgroundImage = `url(../img/background1)`;
}

export default backgroundImg;
