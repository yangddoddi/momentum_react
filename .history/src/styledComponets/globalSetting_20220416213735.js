import { createGlobalStyle } from "styled-components";
import randomBackgroundImg from "../backgroundImg";
import img1 from "../img/background1.jpeg";
import img2 from "../img/background2.jpeg";
import img3 from "../img/background3.jpeg";
import img4 from "../img/background4.jpeg";
import img5 from "../img/background5.jpeg";

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
  background-image: url(${randomBackgroundImg}});
  margin:0px;
  background-size: containe
}

p {
    margin: 0;
  }
`;

export default GlobalStyle;
