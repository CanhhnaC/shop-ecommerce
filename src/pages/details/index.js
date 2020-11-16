import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
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
    transition: color 0.15s ease;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .content {
    padding: 20px;
    width: 60%;
    letter-spacing: 1.5px;
    h3 {
      font-size: 25px;
    }
    h2 {
      font-size: 40px;
      padding: 10px 0;
    }
    h4 {
      font-size: 20px;
    }

    h5 {
      text-transform: capitalize;
    }
    p {
      font-size: 12px;
      color: #666;
      line-height: 25px;
      letter-spacing: 1px;
    }
    .round {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 1px solid #000;
      position: relative;
      margin: 15px 0 0 0;
      &::after {
        content: "";
        background-image: url(${({ img }) => img});
        background-position: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        top: 1.8px;
        right: 1.48px;
      }
    }

    .add-cart {
      text-align: center;
      padding: 20px 0;
      button {
        height: 50px;
        width: 100%;
        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }

    .detail {
      position: relative;
      border: 1px solid #ddd;
      border-left: none;
      border-right: none;
      background-color: #fff;
      button {
        width: 100%;
        height: 50px;
        outline: none;
        border: none;
        text-align: left;
        padding-left: 20px;
        background-color: #fff;
      }

      span {
        position: absolute;
        top: 13px;
        right: 10px;
      }
    }

    .quantity {
      font-weight: bold;
      font-size: 20px;
      height: 45px;
      margin-top: 20px;
      button {
        border: 1px solid #ddd;
        width: 50px;
        outline: none;
      }

      .decrement {
        border-right: none;
      }

      .increment {
        border-left: none;
      }

      input {
        border: 1px solid #ddd;
        outline: none;
        border-left: none;
        border-right: none;
        width: 50px;
        text-align: center;
      }
    }

    .desc {
      display: ${({ display }) => (display ? "block" : "none")};
      padding: 20px;
      color: #666;
      line-height: 25px;
      letter-spacing: 1px;
    }
  }
`;
const Detail = ({ match }) => {
  const [product, setProduct] = useState([]);
  const [quatity, setQuatity] = useState(1);
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
  const [show, setShowDetail] = useState(false);

  return (
    <StyleDetail img={product.image} display={show}>
      <div className="left"></div>
      <div className="right">
        <img src={product.image} alt="##" />
      </div>
      <div className="content">
        <h3>{product.brand}</h3>
        <h2>{product.name}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0",
          }}
        >
          <h4>Price: ${product.price}</h4>
          <h5>Styled: {`${product.id}-${product.color}-${product.size}`}</h5>
        </div>
        <h5>{product.color}</h5>
        <div className="round"></div>
        <div
          style={{
            display: "flex",
            margin: "20px 0",
            justifyContent: "space-between",
          }}
        >
          <div>
            <label>Qty</label>
            <div className="quantity" style={{ display: "flex" }}>
              <button
                className="decrement"
                onClick={() => {
                  if (quatity > 1) {
                    setQuatity(quatity - 1);
                  }
                }}
              >
                <span>-</span>
              </button>
              <input type="tel" value={quatity} />
              <button
                className="increment"
                onClick={() => setQuatity(quatity + 1)}
              >
                <span>+</span>
              </button>
            </div>
          </div>
          <div>
            <label>Choose size</label>
            <div style={{ marginTop: "20px" }}>
              <Input
                data={RANDOM_SIZE}
                onChange={onSize}
                value={size}
                label="Size"
                width="140px"
              />
            </div>
          </div>
        </div>
        <p>
          Eligible for a $2.62 donation to the cause of your choice. Select
          Cause | Learn More Powered By ShoppingGives
        </p>
        <div className="add-cart">
          <Button>
            <Link to="/cart-shop">
              Add To Cart
            </Link>
          </Button>
        </div>
        <div className="detail">
          <button onClick={() => setShowDetail(!show)}>Detail & Care</button>
          <span>
            <i class="fas fa-chevron-down"></i>
          </span>
          <p className="desc">{product.description}</p>
        </div>
      </div>
    </StyleDetail>
  );
};

export default Detail;
