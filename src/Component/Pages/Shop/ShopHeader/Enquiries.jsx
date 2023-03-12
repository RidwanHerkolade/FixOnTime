import React, {useState} from "react";
import './ShopHeader.css'

const Enquiries = () => {
    
      return (
           <div className="enquiries__div">
                 <div className="enquiries__divs">
                       <div className="h2__header">
                       <h2>Make enquires</h2>
                       </div>
                       <form>
                           <div className="form__inputsss">
                           <div className="form__input">
                               <label htmlFor="name">Name</label>
                               <input type="name" />
                           </div>
                           </div>
                           <div className="form__inputsss">
                           <div className="form__input">
                               <label htmlFor="company">Company</label>
                               <input type="name" />
                           </div>
                           </div>
                           <div className="form__inputs">
                                 {/* <div className="form__inputsss"> */}
                                         <div className="form__input">
                                             <label htmlFor="Email">Email</label>
                                              <input type="email" />
                                        </div>

                                 {/* </div> */}
                                 {/* <div className="form__inputsss"> */}
                                         <div className="form__input">
                                             <label htmlFor="phone no">Phone number</label>
                                              <input type="number" />
                                        </div>

                                 {/* </div> */}
                               

                           </div>
                           <div className="form__inputsss">
                           <div className="form__input">
                                 <label htmlFor="Brand">Brand</label>
                                 <select className="select">
                                        <option>All product</option>
                                        <option>All product</option>
                                        <option>All product</option>
                                 </select>
                           </div>
                           </div>
                           <div className="form__inputsss">
                           <div className="form__input">
                                 <label htmlFor="product">Product</label>
                                 <select className="select">
                                        <option>Select product</option>
                                        <option>Select product</option>
                                        <option>Select product</option>
                                 </select>
                           </div>
                           </div>
                           <div className="form__inputsss">
                            <div className="form__input">
                                 <label htmlFor="message">Message</label>
                                 <textarea></textarea>
                               
                            </div>
                            </div>
                            <div className="form__inputsss">
                            <div className="form__inputBtn">
                                  <button className="buttons">Send</button>
                                  <div className="cancel">Cancel</div>
                            </div>
                            </div>
                       </form>
                 </div>
           </div>
      )
}
export default Enquiries;