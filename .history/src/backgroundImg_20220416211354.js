import React from "react";
import img1 from "./img/background1.jpeg";
import img2 from "./img/background2.jpeg";
import img3 from "./img/background3.jpeg";
import img4 from "./img/background4.jpeg";
import img5 from "./img/background5.jpeg";

const backgroundImg = [
  "./img/background1.jpeg",
  "./img/background2.jpeg",
  "./img/background3.jpeg",
  "./img/background4.jpeg",
  "./img/background5.jpeg",
];

function MakeRandomNumbers() {
  return Math.floor(Math.random() * backgroundImg.length);
}

const randomBackgroundImg = `url("../img/background${MakeRandomNumbers()}.jpeg")`;

export default randomBackgroundImg;
