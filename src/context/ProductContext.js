import React, { useState } from "react";

export const ProductCtx = React.createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const store = {
    product: [product, setProduct],
    cart: [cart, setCart],
  };
  return <ProductCtx.Provider value={store}>{children}</ProductCtx.Provider>;
};
export default ProductProvider;
