import React from "react";
import {useForm} from "react-hook-form"
import TrendingFlatSharpIcon from '@mui/icons-material/TrendingFlatSharp';

function Form(){
      const {register, handleSubmit, formState: {errors}} = useForm();
      function onSubmit(data){
            console.log(data)

      }
            
      
      return(
                     <div className="form__divs">
                         <div className="form__div">
                                <h2>Request a service</h2>
                                 <form onSubmit={handleSubmit(onSubmit)}>
                                      <div className="form__inputss">
                                      <div className="form__input">
                                              <label htmlFor="name">Name</label>
                                              <input name="name" type="name" {...register("name", {required: "your name is require", maxLength: {value: 11}})}/>
                                      </div>
                                      {errors.name && <p className="errors">{errors.name.message}</p> }
                                      </div>
                                      <div className="form__inputss">
                                      <div className="form__input">
                                              <label htmlFor="company">company</label>
                                              <input name="name" type="text" {...register("name", {required: "your company name is require"})} />
                                      </div>
                                      {errors.name && <p className="errors">{errors.name.message}</p> }
                                      </div>
                                       <div className="form__inputs">
                                            <div className="form__inputss">
                                            <div className="form__input">
                                                  <label htmlFor="email">Email address</label>
                                                  <input name="email" type="email"{...register("email", {required: "your email is required",
                                                      pattern: {
                                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                            message: 'Please enter a valid email',
                                                      }
                                                
                                                })} />
                                            </div>
                                            {errors.email && <p className="errors">{errors.email.message}</p> }
                                            </div>
                                            <div className="form__inputss">
                                            <div className="form__input">
                                                  <label htmlFor="phone no">Phone number</label>
                                                  <input name="number" type="number" {...register("number", {required: "your phone number is require", maxLength: {value: 11}})}/>
                                                  
                                                  
                                            </div>
                                            
                                            {errors.number && <p className="errors">{errors.number.message}</p> }
                                            </div>

                                        </div>
                              
                                          <div className="form__inputss">
                                          <div className="form__input">
                                                  <label htmlFor="phone no">message</label>
                                                  <textarea name= "textArea" {...register("textArea", {require: "your message is require"})}></textarea>

                                         </div>
                                         {errors.textArea && <p className="errors">{errors.textArea.message}</p> }
                                         </div>

                                         <button className="button" type="submit">Submit a request  <TrendingFlatSharpIcon style={{color: "#ffff", fontSize: '20px',}} className="arrow"/></button>
                                     


                                 </form>
                         </div>

                     </div>
         
      )
}
export default Form;