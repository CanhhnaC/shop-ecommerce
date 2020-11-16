import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { ListCard } from "./components/ListCard";
import Search from "../../components/Search";
import { getProducts } from "../../utils/api/productsApi";
import banner from "../../assets/images/holiday.png";
import { ProductCtx } from "../../context/ProductContext";

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Home = () => {
  const { product } = useContext(ProductCtx);
  const [data, setData] = product;
  const [options, setOptions] = useState("");

  useEffect(() => {
    const getData = async () => {
      await getProducts(options)
        .then((result) => setData(result.data))
        .catch((error) => console.log(error));
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  function handleChange(options) {
    setOptions(options);
  }

  return (
    <div style={{ margin: "20px" }}>
      <Image src={banner} alt="Banner" />
      <Search onChange={handleChange} />
      {data ? <ListCard products={data} /> : null}
    </div>
  );
};

export default Home;
