import React from "react";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
const Mainlayout= ({children})=>{
    return(
     <div>
         <Header></Header>
         {children}
         <Footer></Footer>
     </div>
    )
}
export default Mainlayout