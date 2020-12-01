import React from "react";
import Item from "./Item";

const ListCart = ({ data, onhandleRemove, onhandlePre, onhandleNext }) => {
  return (
    <>
      {data.map((product) => {
        return (
          <Item
            onhandleNext={onhandleNext}
            onhandlePre={onhandlePre}
            onhandleRemove={onhandleRemove}
            product={product}
          />
        );
      })}
    </>
  );
};

export default ListCart;
