import React from "react";
import gif_logo from "../../assets/images/logo-gif.PNG";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Navbar = styled.div`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    color: black;
    display: flex;
    margin-top: 30px;
    justify-content: center;
    text-transform: uppercase;
    div a {
      text-decoration: none;
      &:hover {
        color: gray;
        cursor: pointer;
      }
    }
    .icon {
      margin-top: -2.3%;
    }
    div {
      margin-left: 30px;
    }
  `;

  return (
    <Navbar>
      <div className="icon">
        <img src={gif_logo} alt="Logo"></img>
      </div>
      <div>
        <Link to="/">NEW!</Link>
      </div>
      <div>
        <Link to="/">BRAS &amp; Lingerie</Link>
      </div>
      <div>
        <Link to="/">Sleep &amp; Lounge</Link>
      </div>
      <div>
        <Link to="/">CloThing</Link>
      </div>
      <div>
        <Link to="/">Accessories</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Sale</Link>
      </div>
      <div>
        <Link to="/">Explore</Link>
      </div>
      <div>
        <Link to="/">Rewards</Link>
      </div>
    </Navbar>
  );
};
export default Navbar;
