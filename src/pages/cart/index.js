import React, { useContext } from "react";
import { ProductCtx } from "../../context/ProductContext.js";
import styled from "styled-components";
import ListCart from "./ListCart";
import Total from "./Total";

const StyleCart = styled.div`
  h2 {
    padding: 20px 0 0 100px;
    font-size: 50px;
  }
  table {
    padding: 30px 20px;
    width: 90%;
    margin: 0 auto;
    th {
      padding: 30px 20px;
    }
  }
`;

const Cart = () => {
  const { carts } = useContext(ProductCtx);
  const [cart, setCart] = carts;
  const onhandleRemove = (event) => {
    if (window.confirm("are you sure")) {
      let newData = cart.filter((item) => {
        return item.id !== event;
      });
      setCart(newData);
    }
  };
  return (
    <StyleCart>
      <h2> Cart </h2>
      <table className="cart" data-cart-quantity="1">
        <thead className="cart-header">
          <tr>
            <th style={{ textAlign: "left" }}>Added Items</th>
            <th>Size</th>
            <th>Color</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody className="cart-list">
          <ListCart onhandleRemove={onhandleRemove} data={cart} />
        </tbody>
      </table>
      <div className="total">
        <Total />
      </div>
    </StyleCart>
  );
};

export default Cart;
