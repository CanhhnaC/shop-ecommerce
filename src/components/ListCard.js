import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyleListCard = styled.div`
  display: flex;
`;
export const ListCard = ({ products }) => {
  return (
    <StyleListCard>
      {products.map((product) => (
        <Card key={product.id}
          product={{
            name: product.name,
            color: product.color,
            price: product.price,
            image: product.image,
          }}
        />
      ))}
    </StyleListCard>
  );
};
