import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Pagination from "../../components/Pagination.js";
import { ListCard } from "./components/ListCard";
import Filter from "../../components/Filter";
import banner from "../../assets/images/holiday.png";
import { ProductCtx } from "../../context/ProductContext.js";
import { getFilter } from "../../utils/helpers/index.js";
import { LIMIT_PER_PAGE } from "../../constants/index.js";

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

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

const Main = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
  }
`;

const Home = () => {
  const { products, options, pages, totals, carts } = useContext(ProductCtx);
  const [total] = totals;
  const data = products[0];
  const setOption = options[1];
  const [page, setPage] = pages;
  const [cart, setCart] = carts;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const onhandleAddCart = (id) => {
    let newCart = [...cart];
    let iTempCart = newCart.find((item) => id.id === item.id);
    if (iTempCart) {
      iTempCart.count++;
      iTempCart = {
        ...id,
      };
    } else {
      iTempCart = {
        ...id,
        count: 1,
      };
      newCart.push(iTempCart);
    }
    setCart(newCart);
  };

  function handleSearch(options) {
    setOption(options);
  }

  function handlePagination(value) {
    setPage(value);
  }

  return (
    <div style={{ margin: "20px" }}>
      <Banner>
        <Image src={banner} alt="Banner" />
      </Banner>

      <Filter onChange={handleSearch} />

      <Main>
        {data ? (
          <ListCard onhandleClick={onhandleAddCart} products={data} />
        ) : null}
      </Main>

      <div className="pagination">
        <Pagination
          onHandle={handlePagination}
          start={page}
          limit={LIMIT_PER_PAGE}
          totalPage={total}
        />
      </div>
    </div>
  );
};

export default Home;
