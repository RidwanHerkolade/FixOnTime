import React from "react";
import './Subscribe.css'

function Subscribe(){
      return(
         <div className="subscribe__div">
             <h2>Stay connected </h2>
             <p>Be the first to know when we release new episode of  Blog post, add new products and news letters</p>
             <form>
                  <input 
                     type= "email"
                     name="email"
                     placeholder="Enter your email address"
                  
                  />
                  <button className="subscribe__btn">Subscribe</button>

             </form>
         </div>
      )
}
export default Subscribe;
