import React from "react";
import Nav from "../../../NavBar/Nav";
import NavHead from "../../../NavBar/NavHead";
import Brand from "../../../Brands/Brand";
import Footer from "../../../Footer/Footer";
import AboutGrid from "../AboutGrid/AboutGrid";
import AboutHeader from "../AboutHeader/AboutHeader";
import AboutDataContent from "../AboutData/AboutDataContent";
import LightGrid from "../LightGrids/LightGrid";
import AboutService from "../AboutServices/AboutService";

function AboutApp(){
    return (
        <div className="about__app">
             <Nav/>
             <NavHead/>
             <AboutHeader/>

             <AboutGrid/>
             <AboutDataContent/>
             <LightGrid/>
             <AboutService/>
            

             <Brand/>
             <Footer/>
      

        </div>
    )
 }
export default AboutApp;