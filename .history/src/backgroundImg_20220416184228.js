import React from "react";

const backgroundImg = [
  "./img/background1.jpeg",
  "./img/background2.jpeg",
  "./img/background3.jpeg",
  "./img/background4.jpeg",
  "./img/background5.jpeg",
];

function MakeRandomNumbers() {
  Math.floor(Math.random() * backgroundImg.length);
}
