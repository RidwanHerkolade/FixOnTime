import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confirm from "./Confim";
import { useForm } from "react-hook-form"
import './ShopHeader.css'

const Enquiries = () => {
      const navigate = useNavigate();
      const [display, setDisplay] = useState(false);
      const {register, handleSubmit, formState: {errors}} = useForm();
     
      const displayCancel = () => {
            navigate('/shopapp')
      }
      const onSubmit = () => {
            setDisplay(!display);
      };
      const handleCancel = () => {
            navigate('/');
      };

      return (
            <div className="undivs">
           <div className="enquiries__div">
            
                 <div className="enquiries__divs">
                       <div className="h2__header">
                       <h2>Make enquires</h2>
                       </div>
                       <form onSubmit={handleSubmit(onSubmit)}>
                           <div className="form__inputsss">
                           <div className="form__input">
                               <label htmlFor="name">Name</label>
                               <input type="name" {...register("name", {required:"your name is required"})} />
                           </div>
                           {errors.name && <p className="errors">{errors.name.message}</p> }
                           </div>
                           <div className="form__inputsss">
                           <div className="form__input">
                               <label htmlFor="company">Company</label>
                               <input type="name" {...register("namee", {required: "your company name is required"})} />
                           </div>
                           {errors.name && <p className="errors">{errors.name.message}</p> }
                           </div>
                           
                           <div className="form__inputs">
                                         <div className="form__inputss">
                                         <div className="form__input">
                                             <label htmlFor="Email">Email</label>
                                              <input type="email"  {...register("email", {required: "your email is require",
                                                  pattern: {
                                                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                       message: "please enter a valid email "
                                                  }
                                          
                                          })}/>
                                        </div>
                                        {errors.email && <p className="errors">{errors.email.message}</p> }
                                        </div>
                                        
                                         <div className="form__inputss">
                                         <div className="form__input">
                                             <label htmlFor="phone no">Phone number</label>
                                              <input type="number" {...register("number", {required: "your phone number is require", maxLength: {value: 11}})}/>
                                        </div>
                                        {errors.number && <p className="errors">{errors.number.message}</p> }
                                        </div>
                                        

                                
                           </div>
                           <div className="form__inputsss">
                           <div className="form__input">
                                 <label htmlFor="Brand">Brand</label>
                                 <select className="select" {...register("product", {required: "seleect your product"})}>
                                        <option>All product</option>
                                        <option>All product</option>
                                        <option>All product</option>
                                 </select>
                           </div>
                           {errors.product && <p className="errors">{errors.product.message}</p> }
                           </div>
                           <div className="form__inputsss">
                           <div className="form__input">
                                 <label htmlFor="product">Product</label>
                                 <select className="select"  {...register("product", {required: "select your product"})}>
                                        <option>Select product</option>
                                        <option>Select product</option>
                                        <option>Select product</option>
                                 </select>
                           </div>
                           {errors.product && <p className="errors">{errors.product.message}</p> }
                           </div>
                           <div className="form__inputsss">
                            <div className="form__input">
                                 <label htmlFor="message">Message</label>
                                 <textarea type="textArea"  {...register("textArea", {required: "your comment is require"})}></textarea>
                               
                            </div>
                            {errors.textArea && <p className="errors">{errors.textArea.message}</p> }
                            </div>
                            <div className="form__inputsss">
                            <div className="form__inputBtn">
                                    <button className="buttons" type="submit">Send</button>
                                    <div className="cancel" onClick={handleCancel}>Cancel</div>
                            </div>
                            </div>
                       </form>
                 </div>
                 {display && <Confirm displayCancel= {displayCancel}/>}
                
             </div>
             

             </div>
      )
}
export default Enquiries;