import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyleListCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ListCard = ({ products }) => {
  return (
    <StyleListCard>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </StyleListCard>
  );
};
