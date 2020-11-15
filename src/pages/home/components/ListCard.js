import React from "react";
import styled from "styled-components";
import Card from "../../../components/Card";

const StyleListCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
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
