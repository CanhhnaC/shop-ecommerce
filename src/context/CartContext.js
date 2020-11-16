import React, { createContext, useState } from "react";

export const CartContext = createContext();

const initialVl = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

  const setStorage = (cartItems) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.length > 0 ? cartItems : [])
    );
  };

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState(initialVl);

  const reducerCart = (action) => {
    switch (action.type) {
      case 'add':
        setCart([...cart,action.payload])
        setStorage(cart)
        break;
    
      default:
        break;
    }
  }

  return (
    <CartContext.Provider value={{ cart, reducerCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;

