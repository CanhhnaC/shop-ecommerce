import React, { useEffect, useState } from "react";
import { ListCard } from "./components/ListCard";
import Search from "../../components/Search";
import { GlobalStyle } from "../../components/styles/GlobalStyle";
import { getProducts } from "../../utils/api/productsApi";

const Home = () => {
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
    <>
      <div style={{ margin: "20px" }}>
        <Search onChange={handleChange} />

        {data ? <ListCard products={data} /> : null}
        <GlobalStyle />
      </div>
      </>
  );
};

export default Home;
