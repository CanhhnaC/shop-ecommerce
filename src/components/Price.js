import React from "react";
import { StyleInput } from "./Input";

const Price = ({ data, onChange, value }) => {
  return (
    <StyleInput value={value} onChange={onChange}>
      <option>Price</option>
      {data.map((select) => (
        <option
          key={select.gte}
          value={[select.gte, select.lte]}
        >{`$${select.gte} to $${select.lte}`}</option>
      ))}
    </StyleInput>
  );
};

export default Price;
