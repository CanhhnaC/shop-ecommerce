import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleFooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 7rem 0;

  .info-heading {
    text-transform: uppercase;
    font-size: 0.875rem;
    line-height: 30px;
    letter-spacing: 1.5px;
    margin-bottom: 0.75rem;
    font-weight: bold;
  }

  li {
    display: block;
    a {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.6875rem;
      letter-spacing: 1.75px;
      color: #000;
    }
  }

  .newsletter-heading {
    text-transform: uppercase;
    color: #000;
    font-size: 0.875rem;
    line-height: 25px;
    letter-spacing: 1.25px;
    margin-bottom: 0.75rem;
  }

  .footer-form {
    display: flex;
    justify-content: space-between;

    input {
      box-sizing: border-box;
      border-radius: 2px;
      padding: 0px 0px 0px 5px;
      height: 38px;
      text-align: left;
      color: rgb(0, 0, 0);
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0px;
      background-color: rgb(255, 255, 255);
      border: none;
      width: 100%;

      &:focus {
        box-shadow: rgb(0, 100, 205) 0px 0px 5px;
        outline: none;
      }
    }

    button {
      padding: 10px;
      position: relative;
      border: none;
      background: none;

      &:focus {
        outline: none;
      }
      &::after {
        content: "";
        background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTMxIDE2bC0xNS0xNXY5aC0xNnYxMmgxNnY5eicgZmlsbD0nIzAwMDAwMCc+PC9wYXRoPjwvc3ZnPg==");
        width: 0.8rem;
        height: 0.8rem;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 0;
      }
    }
  }

  .socialLinks {
    text-align: right;
    li {
      display: inline-block;
      margin: 0 12px 12px 0;
    }
  }

  .signature {
    float: right;
    width: auto;
    height: auto;
  }
`;

const StyleFooterBt = styled.div`
  padding: 0 7rem 2rem;
  li {
    display: inline-block;
    margin-right: 50px;
    a {
      text-decoration: none;
      font-size: 0.75rem;
      color: #000;
    }
  }
`;

const data = {
  About: [
    "About",
    "About Josie Cruz Natori",
    "Explore the Brands",
    "Natori Gives",
    "Careers",
  ],
  Help: [
    "Contact Us",
    "Your Account",
    "Shipping Methods",
    "Website Returns",
    "FAQ",
  ],
  Shop: [
    "Locations",
    "Gift Cards",
    "International Shipping",
    "Student Discount",
  ],
};

const FooterCol = () => {
  let result = [];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      result.push(
        <div key={key}>
          <h5 className="info-heading">{key}</h5>
          <ul className="info-list">
            {data[key].map((item, index) => {
              return (
                <li key={index}>
                  <Link to="/">{item}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
  return result;
};

export const Footer = () => {
  return (
    <>
      <StyleFooterTop>
        {FooterCol()}
        <div className="info-col">
          <h5 className="newsletter-heading">
            Join our list and receive exclusives
          </h5>
          <div className="footer-form">
            <input type="email" name="email" placeholder="Your email address" />
            <button type="button"></button>
          </div>
          <ul className="socialLinks">
            <li>
              <Link to="/">
                <i className="fas fa-camera-retro"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-facebook-square"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-camera-retro"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-youtube"></i>
              </Link>
            </li>
          </ul>
          <div>
            <img
              className="signature"
              src="https://cdn11.bigcommerce.com/s-vkxbwye8i2/product_images/uploaded_images/jcn-sig.jpg?t=1589569698&amp;_ga=2.5651571.1394121379.1589291923-174497479.1585605496"
              alt="Josie Natori signature"
            />
          </div>
        </div>
      </StyleFooterTop>

      <StyleFooterBt>
        <ul>
          <li>
            <span className="powered-by">
              © 2020 Natori All Rights Reserved
            </span>
          </li>
          <li>
            <Link to="/">Sitemap</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Accessibility Statement</Link>
          </li>
        </ul>
      </StyleFooterBt>
    </>
  );
};

export default Footer;
