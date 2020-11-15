import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Routes from "./routes.js"

import { Footer } from "./components/common/Footer";
import { ListCard } from "./components/ListCard";
import { GlobalStyle } from "./components/styles/GlobalStyle";
import Search from "./components/Search";

import { getProducts } from "./utils/api/productsApi";

import banner from "./assets/images/holiday.png";

const Image = styled.img`
  width: 100%;
  height: auto;
`


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
    <Routes>
      <div>
        <Image src={banner} alt="Banner" />
        <h2>Holiday Looks</h2>
      </div>
      <div style={{ margin: "20px" }}>
        <Search onChange={handleChange} />

        {data ? <ListCard products={data} /> : null}
        <Footer />
        <GlobalStyle />
      </div>
    <Routes />
  );
};

export default App;
