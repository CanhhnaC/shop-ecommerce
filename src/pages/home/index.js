import React, { useEffect, useState } from "react";
import { ListCard } from "./components/ListCard";
import Search from "../../components/Search";
import { getProducts } from "../../utils/api/productsApi";
import banner from "../../assets/images/holiday.png";
import styled from 'styled-components'

const Image = styled.img`
  max-width: 100%;
  height: auto;
`
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
        <Image src={banner} alt="Banner" />
        <Search onChange={handleChange} />

        {data ? <ListCard products={data} /> : null}
      </div>
      </>
  );
};

export default Home;
