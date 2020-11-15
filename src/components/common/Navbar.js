import React from "react";
import gif_logo from "../../assets/images/logo-gif.PNG";
import styled from "styled-components";
const Navbar = () => {
  const Navbar = styled.div`
	font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight:400;
    font-size: 0.8rem;
    color:black;
    display: flex;
    margin-top:30px;
    justify-content:center;
    text-transform:uppercase;
    div:hover{
      color:gray;
      cursor: pointer;
    }
    .icon{
      margin-top:-2.3%;
    }
    div{
      margin-left:30px;

    }
  `
  return (
    <Navbar>
      <div className="icon">
        <img src={gif_logo}></img>
      </div>
      <div className="new_text">NEW!</div>
      <div>BRAS &amp; Lingerie</div>
      <div>Sleep &amp; Lounge</div>
      <div>CloThing</div>
      <div>Accessories</div>
      <div>home</div>
      <div>Sale</div>
      <div>Explore</div>
      <div>Rewards</div>
    </Navbar>
  );
};
export default Navbar;
