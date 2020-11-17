import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./Navbar.js";

import logo from "../../assets/images/Logo.jpg";
import Search from "../Search.js";

const icons = ["far fa-heart", "far fa-user", "fas fa-shopping-bag"];

const StyleHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  min-height: 130px;
  border-bottom: 1px solid #e5e5e5;
  z-index: 3;

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

const Button = styled.button`
  border: 1px solid transparent;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <StyleHeader>
      <div className="top_header">
        <div className="title">
          <Link to="/">
            <img alt="logo" src={logo} />
          </Link>
        </div>
        <div className="icon">
          <ul>
            <li>
              <Button onClick={toggleModal}>
                <i className="fas fa-search"></i>
              </Button>
            </li>
            {icons.map((item) => (
              <li key={item}>
                <Link to="/">
                  <i className={item} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Navbar></Navbar>
      {showModal && <Search closeModule={toggleModal} />}
    </StyleHeader>
  );
};

export default Header;
