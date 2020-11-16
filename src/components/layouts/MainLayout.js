import React from "react";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import { GlobalStyle } from "../styles/GlobalStyle.js";

const MainLayout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <div style={{ marginTop: "140px" }}>{children}</div>
      <Footer></Footer>
    </div>
  );
};
export default MainLayout;
