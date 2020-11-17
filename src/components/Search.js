import React from "react";
import styled from "styled-components";

export const StyleSearch = styled.div`
  position: relative;

  & > div {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 20px;
    width: 80%;

    text-align: center;
    border: 1px solid #ccc;
  }

  input {
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    outline: none;

    &:focus {
      border: 1px solid #999;
    }
  }
  button {
    width: 8%;
    margin-left: 2%;
    padding: 9px;
  }
`;

const Search = ({ closeModule, clickSearch }) => {
  return (
    <StyleSearch>
      <div>
        <input placeholder="Search the store" />
        <button onClick={clickSearch}>Search</button>
        <button onClick={closeModule}>Close</button>
      </div>
    </StyleSearch>
  );
};

export default Search;
