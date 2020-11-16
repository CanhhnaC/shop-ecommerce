import React from "react";
import styled from "styled-components";
const StyleButton = styled.button`
    color: #fff;
    background: black;
    width: 100px;
    height: 30px;
    border: none;
    outline: none;
    cursor: pointer;
`
const Button = ({children}) => {
  return (
    <StyleButton>
      {children}
    </StyleButton>
  );
}

export default Button;
