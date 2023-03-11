import React from "react";
import Nav from "../../../NavBar/Nav";
import NavHead from "../../../NavBar/NavHead";
import ShopHeader from "../ShopHeader/ShopHeader";
import ShopSearch from "../ShopSearch/ShopSearch";
import Footer from "../../../Footer/Footer";


const ShopApp = () => {
     return (
         <div className="shopApp">
              <Nav/>
              <NavHead/>
              <ShopHeader/>
              <ShopSearch/>
              <Footer/>
         </div>
     )
}
export default ShopApp;