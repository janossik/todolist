import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    box-sizing:border-box;
    font-family:sans-serif;
  }
  body{
    margin:0;
  }
`;
export default GlobalStyle;
