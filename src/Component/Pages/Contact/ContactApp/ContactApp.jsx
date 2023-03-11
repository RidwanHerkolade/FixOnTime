import React from "react";
import Nav from "../../../NavBar/Nav";
import NavHead from "../../../NavBar/NavHead";
import ContactHeader from "../ContactHeader/ContactHeader";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import ContactDate from "../ContactDate/ContactDate";

function ContactApp(){
      return(
         <div className="contactapp__div">
            <Nav/>
            <NavHead/>
            <ContactHeader/>
            <ContactForm/>
            <ContactDate/>
            <Footer/>

             
         </div>
      )
}
export default ContactApp;