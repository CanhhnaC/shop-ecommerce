import React, { useContext, useState, useEffect } from "react";
import { ProductCtx } from "../../context/ProductContext.js";
import styled from "styled-components";
import ListCart from "./ListCart";
import Total from "./Total";
import { calcSum } from "../../utils/helpers";

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
  const [total, setTotal] = useState(calcSum(cart));
  useEffect(() => {
    setTotal(calcSum(cart));
    console.log(total);
  }, [cart]);
  const onhandleNext = (event) => {
    const newData = cart.map((db) =>
      db.id == event ? { ...db, count: db.count + 1 } : db
    );
    setCart(newData);
  };
  const onhandlePre = (event) => {
    const newData = cart.map((db) =>
      db.id == event ? { ...db, count: db.count - 1 } : db
    );
    setCart(newData);
  };
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
          <ListCart
            onhandleNext={onhandleNext}
            onhandlePre={onhandlePre}
            onhandleRemove={onhandleRemove}
            data={cart}
          />
        </tbody>
      </table>
      <div className="total">{total && <Total totalValue={total} />}</div>
    </StyleCart>
  );
};

export default Cart;