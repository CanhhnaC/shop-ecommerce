import React, { useEffect } from "react";

import Input from "./Input";
import Price from "./Price";

import {
  PRICE_PRODUCT,
  RANDOM_BRAND,
  RANDOM_COLOR,
  RANDOM_SIZE,
  SORT_PRODUCT,
} from "../constants";
import useSelect from "../utils/hooks/useSelect";
import { getFilter } from "../utils/helpers";

const Search = ({ onChange }) => {
  const [color, onColor] = useSelect();
  const [brand, onBrand] = useSelect();
  const [size, onSize] = useSelect();
  const [price, onPrice] = useSelect();
  const [order, onOrder] = useSelect();

  useEffect(() => {
    onChange(getFilter([color, brand, size, price, order]))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, brand, size, price, order])

  return (
    <div>
      <Input
        data={RANDOM_BRAND}
        onChange={onBrand}
        value={brand}
        label="Brand"
      />

      <Input data={RANDOM_SIZE} onChange={onSize} value={size} label="Size" />
      
      <Input
        data={RANDOM_COLOR}
        onChange={onColor}
        value={color}
        label="Color"
      />

      <Price
        data={PRICE_PRODUCT}
        onChange={onPrice}
        value={price}
      />

      <Input
        data={SORT_PRODUCT}
        onChange={onOrder}
        value={order}
        label="Sort By"
      />
    </div>
  );
};

export default Search;
