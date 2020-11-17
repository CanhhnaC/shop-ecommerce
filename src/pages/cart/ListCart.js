import React from "react";
import Item from "./Item";

const ListCart = ({ data, onhandleRemove }) => {
  return (
    <>
      {data.map((product) => {
        return <Item onhandleRemove={onhandleRemove} product={product} />;
      })}
    </>
  );
};

export default ListCart;
