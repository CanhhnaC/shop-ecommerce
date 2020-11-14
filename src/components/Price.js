import React from "react";
import { StyleInput } from "./Input";

const Price = ({ data, onChange, value }) => {
  return (
    <StyleInput>
      <option value={value} onChange={onChange}>
        Price
      </option>
      {data.map((select) => (
        <option>{`$${select.gte} to $${select.lte}`}</option>
      ))}
    </StyleInput>
  );
};

export default Price;
