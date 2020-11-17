import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar.js";
import { useHistory } from "react-router-dom";
import { ProductCtx } from "../../context/ProductContext.js";
import Search from "../Search.js";
import logo from "../../assets/images/Logo.jpg";

let icons = ["a", "b"];

const StyleHeader = styled.header`
  width: 100%;
  min-height: 130px;
  border-bottom: 1px solid #e5e5e5;
  position: static;
  margin-top: 20px;

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
  const { searchs } = useContext(ProductCtx);
  const [search, setSearch] = searchs;
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  const gotoCart = (e) => {
    e.preventDefault();
    history.push("/cart");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function handleSearch(e) {
    setSearch(e);
    toggleModal();
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
            <li>
              <Button onClick={gotoCart}>
                <i className="fas fa-shopping-bag"></i>
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <Navbar></Navbar>
      {showModal && (
        <Search closeModule={toggleModal} onSearch={handleSearch} />
      )}
    </StyleHeader>
  );
};

export default Header;
