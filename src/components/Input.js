import React from "react";
import styled from "styled-components";

export const StyleInput = styled.select`
  border: 1px solid #ddd;
  width: ${({width}) => width || "20%" };
  padding: 15px;
  cursor: pointer;

  color: #444;
  font-size: 14px;

  &:focus {
    outline:none
  }

  & option {
    padding: 10px;
    box-shadow: 0 10px 15px rgba(0,0,0,.2);
    border: none;
  }
`;

const Input = ({ data, onChange, value, name, label, width }) => {
  return (
    <StyleInput value={value} onChange={onChange} name={name} width={width}>
      {data.map((option) => (
        <option key={option} value={option}>
          {option ? option : label}
        </option>
      ))}
    </StyleInput>
  );
};

export default Input;
