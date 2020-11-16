import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  // You can continue writing global styles here
  ${normalize}

  *{
    font-family: helvetica-neue-regular,Arial,Helvetica,sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;
