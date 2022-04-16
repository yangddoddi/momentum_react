import { createGlobalStyle } from "styled-components";

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
    margin:0px;
    background-color: ;
}

p {
    margin: 0;
  }
`;

export default GlobalStyle;
