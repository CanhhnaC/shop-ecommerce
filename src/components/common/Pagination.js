import React,{useState} from "react";
import styled from "styled-components";
import Axios from "axios";
const Pagination = ({}) => {
  const Pagination = styled.ul`
    display: flex;
    list-style: none;
    li{
        width:20px;
        height:20px;
        font-size:16px;
        margin-left:10px;
        text-align:center;
    }
    .number:hover{
        color:gray;
    }
    .active{
        border-radius:50%;
        background-color:#dcdcdc;
    }
  `;
  return (
    <Pagination>
      <li><i class="fas fa-caret-left"></i></li>
      <li className="number active">1</li>
      <li className="number">2</li>
      <li className="number">3</li>
      <li className="number">4</li>
      <li className="number">5</li>
      <li><i class="fas fa-caret-right"></i></li>
    </Pagination>
  );
};
export default Pagination;
