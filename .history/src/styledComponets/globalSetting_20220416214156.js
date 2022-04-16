import { createGlobalStyle } from "styled-components";
import randomBackgroundImg from "../backgroundImg";
import img1 from "../img/background1.jpeg";
import img2 from "../img/background2.jpeg";
import img3 from "../img/background3.jpeg";
import img4 from "../img/background4.jpeg";
import img5 from "../img/background5.jpeg";

const backgroundArr = [img1, img2, img3, img4, img5];

const MakeRandomNumbers = () => {
  return Math.floor(Math.random() * backgroundArr.length);
};

const backgroundImg = backgroundArr[MakeRandomNumbers];

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box; 
    -webkit-font-smoothing: antialiased;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
      }
}

body {
  background-image: url(${backgroundArr[MakeRandomNumbers]});
  margin:0px;
  background-size: contain;
}

p {
    margin: 0;
  }
`;

export default GlobalStyle;
