import React from 'react';
import { StyleCard } from './styles/StyleCard';

export const Card = ({product}) => {
  return (
    <StyleCard color={product.color}>
      <div className="card-content">
        <div className="card-img">
          <img src={product.image} alt=""/>
        </div>
        <div className="card-leftright">
          <div className="card-left">
            <p>{product.brand}</p>
          </div>
          <div className="card-right">
            <span>${product.price}</span>
          </div>
        </div>
        <h4>{product.name}</h4>
        <div className="card-round">
        </div>
      </div>
    </StyleCard>
  );
}

export default Card;
