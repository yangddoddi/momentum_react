import React from "react";
import img1 from "./img/background1.jpeg";
import img2 from "./img/background2.jpeg";
import img3 from "./img/background3.jpeg";
import img4 from "./img/background4.jpeg";
import img5 from "./img/background5.jpeg";

const ImgNum = 5;

function MakeRandomNumbers() {
  return Math.floor(Math.random() * ImgNum);
}

const randomBackgroundImg = `url("../img/background${MakeRandomNumbers()}.jpeg")`;

export default randomBackgroundImg;
