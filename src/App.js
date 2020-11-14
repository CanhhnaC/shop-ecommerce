import React, { useEffect } from "react";
import Input from "./components/Input";
import useSelect from "./utils/hooks/useSelect";
import {
  PRICE_PRODUCT,
  RANDOM_BRAND,
  RANDOM_COLOR,
  RANDOM_SIZE,
} from "./constants";
import { getFilter } from "./utils/helpers";
import { getProducts } from "./utils/api/productsApi";
import Price from "./components/Price";

const App = () => {
  const [color, onColor] = useSelect();
  const [brand, onBrand] = useSelect();
  const [size, onSize] = useSelect();
  const [price, onPrice] = useSelect();

  useEffect(() => {
    const getData = async () => {
      let options = getFilter([color, brand, size]);
      await getProducts(options)
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
    };
    getData();
  }, [color, brand, size]);

  return (
    <div style={{margin: "20px"}}>
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
    </div>
  );
};

export default App;
