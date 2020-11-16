import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { ListCard } from "./components/ListCard";
import Search from "../../components/Search";
import banner from "../../assets/images/holiday.png";
import { ProductCtx } from "../../context/ProductContext";

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Home = () => {
  const { products, options, pages } = useContext(ProductCtx);
  const data = products[0];
  const setOption = options[1];
  const [page, setPage] = pages;

  function handleChange(options) {
    setOption(options);
  }

  return (
    <div style={{ margin: "20px" }}>
      <Image src={banner} alt="Banner" />
      <Search onChange={handleChange} />
      {data ? <ListCard products={data} /> : null}
      <div>
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Prev</button>
      </div>
    </div>
  );
};

export default Home;
