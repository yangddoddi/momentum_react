import React from "react";

const ImgNum = 5;

function MakeRandomNumbers() {
  return Math.floor(Math.random() * ImgNum);
}

const randomBackgroundImg = `img${MakeRandomNumbers}`;

export default randomBackgroundImg;
