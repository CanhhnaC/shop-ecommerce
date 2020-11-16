import Axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL, LIMIT_PER_PAGE } from "../constants";

export const ProductCtx = React.createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(1);
  const [option, setOption] = useState("");
  const [total, setTotal] = useState(0);

  const store = {
    products: [product, setProduct],
    carts: [cart, setCart],
    pages: [page, setPage],
    options: [option, setOption],
    totals: [total, setTotal],
  };

  useEffect(() => {
    (async function getData() {
      await Axios.get(API_URL + `?_page=${page}&_limit=${LIMIT_PER_PAGE}&`)
        .then((result) => {
          setProduct(result.data);
          setTotal(result.headers["x-total-count"]);
        })
        .catch((error) => console.log(error));
    })();
  }, [option, page]);

  return <ProductCtx.Provider value={store}>{children}</ProductCtx.Provider>;
};
export default ProductProvider;

// -BUG
// await getProducts(option + `?_page=${page}&_limit=${LIMIT_PER_PAGE}&`)
//   .then((result) => {
//     setProduct(result.data);
//     console.log(result.data);
//   })
//   .catch((error) => console.log(error));
