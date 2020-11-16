import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Input, { StyleInput } from "../../components/Input";
import { RANDOM_SIZE } from "../../constants";
import { getProducts } from "../../utils/api/productsApi";
import useSelect from "../../utils/hooks/useSelect";

const StyleDetail = styled.div`
  display: flex;
  margin: 30px auto;
  width: 60%;
  .left {
    width: 10%;
  }
  .right {
    img {
      width: 100%;
      height: 500px;
    }
  }
  .content {
    padding: 20px;
    width: 50%;
    .round {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1px solid #000;
      position: relative;
      margin: 10px 0 0 0;
      &::after {
        content: "";
        background-image: url(${({ img }) => img});
        background-position: center;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        top: 1.8px;
        right: 1.48px;
      }
    }
  }
`;
const Detail = ({ match }) => {
  const [product, setProduct] = useState([]);
  const mathKey = parseInt(match.match.params.id);

  useEffect(() => {
    const getData = async () => {
      await getProducts(`/${mathKey}`)
        .then((result) => setProduct(result.data))
        .catch((error) => console.log(error));
    };
    getData();
  }, [mathKey]);
  const [size, onSize] = useSelect();

  return (
    <StyleDetail img={product.image}>
      <div className="left"></div>
      <div className="right">
        <img src={product.image} alt="##" />
      </div>
      <div className="content">
        <h3>{product.brand}</h3>
        <h2>{product.name}</h2>
        <h4>${product.price}</h4>
        <h5>{product.color}</h5>
        <h6>Styled: {`${product.id}-${product.color}-${product.size}`}</h6>
        <div className="round"></div>
        <div style={{ display: "flex", margin: "20px 0" }}>
          <div className="quantity">{/* <input/> */}</div>
          <Input
            data={RANDOM_SIZE}
            onChange={onSize}
            value={size}
            label="Size"
          />
        </div>
        <div>
          <Button>Add To Cart</Button>
        </div>
        <div className="detail">{product.description}</div>
      </div>
    </StyleDetail>
  );
};

export default Detail;
