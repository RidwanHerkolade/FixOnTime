import React from "react";
import Nav from "../../../NavBar/Nav";
import NavHead from "../../../NavBar/NavHead";
import ServiceHeader from "../ServiceHeader/ServiceHeader";
import ServiceSystem from "../ServiceSystem/ServiceSystem";
import Footer from "../../../Footer/Footer";

function ServiceApp(){
    return (
        <div className="service__app">
             <Nav/>
             <NavHead/>
             <ServiceHeader/>
             <ServiceSystem/>
             <Footer/>
 
        </div>
    )
}
export default ServiceApp;