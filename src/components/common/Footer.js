import React from "react";
import { StyleFooter } from "../styles/StyleFooter";

export const Footer = () => {
  return (
    <StyleFooter>
      <div className="footer_info">
        <div className="footer_info-col">
          <h5 className="footer_info-heading">About</h5>
          <ul className="footer_info-list">
            <li>
              <a href="/">About Josie Cruz Natori</a>
            </li>
            <li>
              <a href="/">Explore the Brands</a>
            </li>
            <li>
              <a href="/">Natori Gives</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer_info-col">
          <h5 className="footer_info-heading">Help</h5>
          <ul className="footer_info-list">
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Your Account</a>
            </li>
            <li>
              <a href="/">Shipping Methods</a>
            </li>
            <li>
              <a href="/">Website Returns</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer_info-col">
          <h5 className="footer_info-heading">Shop</h5>
          <ul className="footer_info-list">
            <li>
              <a href="/">Locations</a>
            </li>
            <li>
              <a href="/">Gift Cards</a>
            </li>
            <li>
              <a href="/">International Shipping</a>
            </li>
            <li>
              <a href="/">Student Discount</a>
            </li>
          </ul>
        </div>
        <div className="footer_info-col">
          <h5 className="footer_newsletter-heading">
            Join our list and receive exclusives
          </h5>
          <div className="footer-form">
            <input type="email" name="email" placeholder="Your email address" />
            <button type="button"></button>
          </div>
          <ul className="socialLinks">
            <li className="socialLinks-item">
              <a href="/">
                <i className="fas fa-camera-retro"></i>
              </a>
            </li>
            <li className="socialLinks-item">
              <a href="/">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li className="socialLinks-item">
              <a href="/">
                <i className="fas fa-camera-retro"></i>
              </a>
            </li>
            <li className="socialLinks-item">
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="socialLinks-item">
              <a href="/">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
          <div className="signature-container">
            <img
              className="signature"
              src="https://cdn11.bigcommerce.com/s-vkxbwye8i2/product_images/uploaded_images/jcn-sig.jpg?t=1589569698&amp;_ga=2.5651571.1394121379.1589291923-174497479.1585605496"
              alt="Josie Natori signature"
            />
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <ul className="footer_copyright-items">
          <li className="footer_copyright-item">
            <span className="powered-by">
              © 2020 Natori All Rights Reserved
            </span>
          </li>
          <li className="footer_copyright-item">
            <a className="footer_copyright-link" href="/sitemap/">
              Sitemap
            </a>
          </li>
          <li className="footer_copyright_item">
            <a className="footer_copyright-link" href="/privacy-policy/">
              Privacy Policy
            </a>
          </li>
          <li className="footer_copyright-item">
            <a
              className="footer_copyright-link"
              href="/accessibility-statement/"
            >
              Accessibility Statement
            </a>
          </li>
        </ul>
      </div>
    </StyleFooter>
  );
};

export default Footer;
