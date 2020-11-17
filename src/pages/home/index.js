import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "../../components/Pagination.js";
import { ListCard } from "./components/ListCard";
import Search from "../../components/Search";
import banner from "../../assets/images/holiday.png";
import { ProductCtx } from "../../context/ProductContext.js";

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
const Home = () => {
  const { products, options, pages, totals } = useContext(ProductCtx);
  const [total] = totals;
  const data = products[0];
  const setOption = options[1];
  const [page, setPage] = pages;

  const Main = styled.div`
    .pagination {
      display: flex;
      justify-content: center;
    }
  `;
  const START_FORM = 1;
  const LIMIT_PAGE = 12;

  function handleChange(options) {
    setOption(options);
  }
  const onHandle = (event) => {
    setPage(event);
  };

  return (
    <Main>
      <div style={{ margin: "20px" }}>
        <Image src={banner} alt="Banner" />
        <Search onChange={handleChange} />
        {data ? <ListCard products={data} /> : null}
        <div className="pagination">
          <Pagination
            onhandle={onHandle}
            start={page}
            limit={LIMIT_PAGE}
            totalPage={total}
          ></Pagination>
        </div>
      </div>
    </Main>
  );
};

export default Home;
