import React, { useState } from 'react';
import styled from 'styled-components';

const StyleItem = styled.tr`
    td.content {
      width: 30%;
    }
    td.color, td.delete, td.total,td.price, td.size {
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
`
const Item = ({product}) => {
  const [quatity, setQuatity] = useState(product.quantyti);
  return (
    <StyleItem>
        <td className="content">
            <div className="img">
            </div>
            <p>{product.brand}</p>
            <h3>{product.name}</h3>
            <span>Style: {`${product.id}-${product.color}-${product.size}`}</span>
        </td>
        <td className="size">{product.size}</td>
        <td className="color">{product.color}</td>
        <td className="price"><span>$ {product.price}</span></td>
        <td className="quanty">
          <div class="form-increment">
              <button onClick={() => {if (quatity > 1) {
                setQuatity(quatity-1)
              }}}>
                  <i class="icon">−</i>
              </button>
          <input value={quatity} />
              <button onClick={() => setQuatity(quatity+1)}>
                  <i class="icon">+</i>
              </button>
          </div>
        </td>
        <td className="total">
            <span>{quatity*product.price}</span>
        </td>
        <td className="delete">
            <span>delete</span>
        </td>

    </StyleItem>
  );
}

export default Item;
