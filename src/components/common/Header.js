import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar.js";

const Header = () => {
  const Header = styled.header`
    width: 100%;
    min-height: 130px;
    border-bottom: 1px solid #e5e5e5;
    position: static;
    img {
      max-width: 100%;
      display: inline-block;
      position: static;
      margin-top: 20px;
    }
    .title {
      width: 100%;
      text-align: center;
    }
    .icon ul li {
      list-style: none;
      margin-left: 20px;
      font-size: 20px;
    }
    .icon ul li i:hover {
      color: gray;
    }
    .icon ul {
      display: flex;
      margin-left: 80%;
      margin-top: -20px;
    }
    a:visited {
      color: black;
    }
  `;

  return (
    <Header>
      <div className="top_header">
        <div className="title">
          <img
            alt="logo"
            src="https://cdn11.bigcommerce.com/s-6gf5gg/images/stencil/250x100/natori_logo_1461095269__14320.original.png"
          ></img>
        </div>
        <div className="icon">
          <ul>
            <li>
              <a href="/">
                <i className="fas fa-search"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="far fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="far fa-user"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-shopping-bag"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Navbar></Navbar>
    </Header>
  );
};
export default Header;
