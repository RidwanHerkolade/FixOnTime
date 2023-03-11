import React from "react";
import ContactData from "./ContactData";
import Form from "./Form";
import Help from "../../../Help/Help";
import './ContactForm.css'
function ContactForm() {
     return (
         <div className="contactform__div">
              <div className="contactform__divsss">
                   <div className="contact__details">
                        <h2>Let's work together; we'd love to hear from you</h2>
                        {ContactData.map((data) => {
                             return [
                                <div className="contactform__divss">
                                <div className="address">
                                    <div className="add">
                                          <img src="../images/vec6.png"/>
                                          <label htmlFor="address">Address</label>

                                    </div>
                                    <a href="#" className="form__linkss">{data.address}</a>
                                    
                                </div>

                                
                                <div className="address">
                                     <div className="add">
                                         <img src="../images/vec5.png"/>
                                          <label htmlFor="phoneNo">Telephone</label>

                                      </div>
                                      <a href="#" className="form__links">{data.number}</a>
                                    
                                     
                                </div>
                               
                                <div className="address">
                                     <div className="add">
                                         <img src="../images/vec4.png"/>
                                          <label htmlFor="email">Email</label>

                                     </div>
                                     <a href="#" className="form__links">{data.email}</a>

                                       
                                </div>
                                 <div className="address">
                                      <div className="add">
                                            <img src="../images/vec7.png"/>
                                            {/* <a href="#" className="form__links">{data.support}</a> */}
                                            <label htmlFor="email">{data.support}</label>

                                      </div>
                                     
                                 </div>
                               
                                <div className="contactform__btn">Open live chat</div>
                           </div>
                             ]
                                
                             
                        })}

                    
                    </div>
                    <Form/>
                    <Help/>
       
                </div>
         </div>
     )
   
}
export default ContactForm;