import { Footer } from "./components/common/Footer";
import { ListCard } from "./components/ListCard";
import { GlobalStyle } from "./components/styles/GlobalStyle";

import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import useSelect from "./utils/hooks/useSelect";
import {
  PRICE_PRODUCT,
  RANDOM_BRAND,
  RANDOM_COLOR,
  RANDOM_SIZE,
  SORT_PRODUCT,
} from "./constants";
import { getFilter } from "./utils/helpers";
import { getProducts } from "./utils/api/productsApi";
import Price from "./components/Price";

const App = () => {
  const [color, onColor] = useSelect();
  const [brand, onBrand] = useSelect();
  const [size, onSize] = useSelect();
  const [price, onPrice] = useSelect();
  const [sort, onSort] = useSelect();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let options = getFilter([color, brand, size, price, sort]);
      console.log(options);
      await getProducts(options)
        .then((result) => setData(result.data))
        .catch((error) => console.log(error));
    };
    getData();
  }, [color, brand, size, price, sort]);

  return (
    <div style={{ margin: "20px" }}>
      <Input
        data={RANDOM_COLOR}
        onChange={onColor}
        value={color}
        label="Color"
      />
      <Input
        data={RANDOM_BRAND}
        onChange={onBrand}
        value={brand}
        label="Brand"
      />
      <Input data={RANDOM_SIZE} onChange={onSize} value={size} label="Size" />
      <Price data={PRICE_PRODUCT} onChange={onPrice} value={price} />

      <Input
        data={SORT_PRODUCT}
        onChange={onSort}
        value={sort}
        label="Sort By"
      />

      <Footer />
      {data ? <ListCard products={data} /> : null}
      <GlobalStyle />
    </div>
  );
};

export default App;
