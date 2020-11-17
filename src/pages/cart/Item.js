import React, { useState } from "react";
import styled from "styled-components";

const StyleItem = styled.tr`
  td.content {
    display: flex;
    text-align: left;
    .img {
      width: 50%;
      height: 200px;
      img {
        height: 200px;
      }
    }
  }
  td.color,
  td.delete,
  td.total,
  td.price,
  td.size {
    width: 10%;
  }
  td.quanty {
    width: 20%;
    button {
      height: 30px;
      width: 30px;
      cursor: pointer;
    }
  }
  td {
    text-align: center;
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
    padding: 30px 20px;
    .form-increment input {
      width: 60px;
      border: none;
      text-align: center;
    }
  }
`;
const Item = ({ product, onhandleRemove, onhandleNext, onhandlePre }) => {
  console.log(product);
  return (
    <StyleItem>
      <td className="content">
        <div className="img">
          <img alt="##" src={product.image} />
        </div>
        <div>
          <p>{product.brand}</p>
          <h3>{product.name}</h3>
          <span>Style: {`${product.id}-${product.color}-${product.size}`}</span>
        </div>
      </td>
      <td className="size">{product.size}</td>
      <td className="color">{product.color}</td>
      <td className="price">
        <span>$ {product.price}</span>
      </td>
      <td className="quanty">
        <div class="form-increment">
          <button
            onClick={() => {
              if (product.count > 1) {
                onhandlePre(product.id);
              }
            }}
          >
            <i class="icon">−</i>
          </button>
          <input value={product.count} />
          <button onClick={() => onhandleNext(product.id)}>
            <i class="icon">+</i>
          </button>
        </div>
      </td>
      <td className="total">
        <span>$ {product.count * product.price}</span>
      </td>
      <td className="delete">
        <a onClick={() => onhandleRemove(product.id)}>
          <span>
            <i class="fas fa-trash"></i>
          </span>
        </a>
      </td>
    </StyleItem>
  );
};

export default Item;