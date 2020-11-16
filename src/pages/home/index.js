import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "../../components/Pagination.js";
import { ListCard } from "./components/ListCard";
import Search from "../../components/Search";
import banner from "../../assets/images/holiday.png";
import { getProducts } from "../../utils/api/productsApi";
import { getFilter } from "../../utils/helpers/index.js";

const Image = styled.img`
  width: 100%;
  height: auto;
`;
const Home = () => {
  const Main = styled.div`
    .pagination {
      display: flex;
      justify-content: center;
    }
  `;
  const START_FORM = 1;
  const LIMIT_PAGE = 12;
  const [totalPage, setTotalPage] = useState();
  const [data, setData] = useState([]);
  const [options, setOptions] = useState("");

  useEffect(() => {
    const getData = async () => {
      await getProducts(options)
        .then((result) => {
          setData(result.data);
          setTotalPage(result.data.length);
        })
        .catch((error) => console.log(error));
    };
    getData();
  }, [options]);

  function handleChange(options) {
    setOptions(options);
  }
  const onhandle = (event) => {
    console.log(event);
  };

  return (
    <Main>
      <div style={{ margin: "20px" }}>
        <Image src={banner} alt="Banner" />
        <Search onChange={handleChange} />
        {data ? <ListCard products={data} /> : null}
        <div className="pagination">
          <Pagination
            onhandle={onhandle}
            start={START_FORM}
            limit={LIMIT_PAGE}
            totalPage={totalPage}
          ></Pagination>
        </div>
      </div>
    </Main>
  );
};

export default Home;
