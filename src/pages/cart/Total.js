import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const StyleTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  ul {
    width: 30%;
    padding: 30px 100px;
    li {
      list-style: none;
      padding: 10px 0;
    }
    .checkout {
      button {
        width: 100%;
        font-size: 15px;
        height: 35px;
      }
    }
  }
`;
const Total = () => {
  return (
    <StyleTotal>
      <ul>
        <li class="cart-total">
          <li>
            <strong>Subtotal:</strong>
          </li>
          <div class="cart-total-value">
            <span>$262.00</span>
          </div>
        </li>
        <li className="checkout">
          <Button>PROCEED TO CHECKOUT</Button>
        </li>
      </ul>
    </StyleTotal>
  );
};

export default Total;
