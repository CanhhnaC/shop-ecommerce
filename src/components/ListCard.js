import React from 'react';
import styled from 'styled-components'
import Card from './Card';

const StyleListCard = styled.div`
  display: flex;
`
export const ListCard = () => {
  return (
    <StyleListCard>
      <Card product={{name: 'heheheh',color: 'red', price: 400, image: 'https://cdn11.bigcommerce.com/s-6gf5gg/images/stencil/500x659/products/24007/61984/L89129_DBW_1__81707.1.jpg'}}/>
      <Card product={{name: 'heheheh',color: 'green', price: 400, image: 'https://cdn11.bigcommerce.com/s-6gf5gg/images/stencil/500x659/products/24007/61984/L89129_DBW_1__81707.1.jpg'}}/>
    </StyleListCard>
  );
}

