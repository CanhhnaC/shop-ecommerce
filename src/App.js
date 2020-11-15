import { Footer } from "./components/common/Footer";
import { ListCard } from "./components/ListCard";
import { GlobalStyle } from "./components/styles/GlobalStyle";

import React, { useEffect, useState } from "react";

import { getProducts } from "./utils/api/productsApi";
import Search from "./components/Search";

const App = () => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState("");

  useEffect(() => {
    const getData = async () => {
      await getProducts(options)
        .then((result) => setData(result.data))
        .catch((error) => console.log(error));
    };
    getData();
  }, [options]);

  function handleChange(options) {
    setOptions(options);
  }

  return (
    <div style={{ margin: "20px" }}>
      <Search onChange={handleChange}/>

      {data ? <ListCard products={data} /> : null}
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
