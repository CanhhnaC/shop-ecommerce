import React from "react";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import banner from "../../assets/images/holiday.png";
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: auto;
`

const Mainlayout= ({children})=>{
    return(
     <div>
         <Header></Header>
         <Image src={banner} alt="Banner" />
         {children}
         <Footer></Footer>
     </div>
    )
}
export default Mainlayout