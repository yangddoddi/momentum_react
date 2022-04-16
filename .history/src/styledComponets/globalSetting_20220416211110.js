import { createGlobalStyle } from "styled-components";
import randomBackgroundImg from "../backgroundImg";

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
  background-image: url("../img/background1.jpeg");
    margin:0px;
}

p {
    margin: 0;
  }
`;

export default GlobalStyle;
