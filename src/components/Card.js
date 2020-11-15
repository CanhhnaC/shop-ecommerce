import React from "react";
import styled from 'styled-components'

const StyleCard = styled.div`
  padding: 40px 30px;
  flex: 0 0 25%;

  .content {
    display: flex;
    justify-content: space-between;
    padding: .75rem 0 0 0;

    .left p {
      text-transform: uppercase;
      color: #000;
      font-size: .78125rem;
      letter-spacing: 1px;
      text-align: left;
    }

    .right span {
      letter-spacing: .5px;
      line-height: 0;
      color: #000;
      font-size: .78125rem;
    }
  }

  h4 {
    font-size: .78125rem;
    font-weight: 500;
    line-height: 35px;
    color: #333;
    letter-spacing: 1px;
    text-align: left;
  }

  h5 {
    line-height: 20px;
  }

  .img img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      cursor: pointer;
  }

  .round {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid #000;
    position: relative;
    margin: 10px 0 0 0;
    &::after {
    content: "";
    background-image: url(${({img}) => img});
    background-position: center;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 1.8px;
    right: 1.48px;
  }

  button {
    position: absolute;
    /* right: 0; */
    left: 179px;
    top: -5px;
    color: #fff;
    background: #383838;
    width: 100px;
    height: 30px;
    border: none;
    outline: none;
    cursor: pointer;
  }
}
`

export const Card = ({ product }) => {
  return (
    <StyleCard img={product.image}>
      <div className="img">
        <img src={product.image} alt="" />
      </div>
      <div className="content">
        <div className="left">
          <p>{product.color}</p>
        </div>
        <div className="right">
          <span>${product.price}</span>
        </div>
      </div>
      <h4>{product.name}</h4>
      <h5>Brand: {product.brand}</h5>
      <h5>Size: {product.size}</h5>
      <div className="round">
        <button>Add To Cart</button>
      </div>
    </StyleCard>
  );
};

export default Card;
