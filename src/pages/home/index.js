import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Pagination from "../../components/Pagination.js";
import { ListCard } from "./components/ListCard";
import Search from "../../components/Search";
import banner from "../../assets/images/holiday.png";
import { ProductCtx } from "../../context/ProductContext.js";
import { LIMIT_PER_PAGE } from "../../constants/index.js";

const Banner = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  & > div {
    position: absolute;
    left: 50%;
    top: 50%;

    div {
      position: relative;
      left: -50%;

      h3 {
        font-family: "Times New Roman", Times, serif;
        font-size: 28px;
        color: #fff;
        letter-spacing: 0.25px;
        text-transform: uppercase;
      }
    }
  }
`;

const StylePagination = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  margin: 0 20px;
`;

const Home = () => {
  const { products, options, pages, totals } = useContext(ProductCtx);
  const [total] = totals;
  const data = products[0];
  const setOption = options[1];
  const [page, setPage] = pages;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  function handleSearch(options) {
    setOption(options);
  }
  const handlePagination = (event) => {
    setPage(event);
  };

  return (
    <Main>
      <Banner>
        <img src={banner} alt="Banner" />
        <div>
          <div>
            <h3>HOLIDAY LOOKS</h3>
          </div>
        </div>
      </Banner>

      <Search onChange={handleSearch} />
      {data ? <ListCard products={data} /> : null}
      <StylePagination>
        <Pagination
          onHandle={handlePagination}
          start={page}
          limit={LIMIT_PER_PAGE}
          totalPage={total}
        />
      </StylePagination>
    </Main>
  );
};

export default Home;
