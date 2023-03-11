import React from "react";
import MoreProductData from "./MoreProductData";
import "./More.css"

const MoreProduct = ({search}) => {
    return (
        <div className="more__divs">
               <div className="more__divss">
                    <h1>More product</h1>
                    <div className="noja__div">
                         {MoreProductData.filter((data) => {
                             return (
                                  data.name.toLowerCase().includes(search)
                             )
                         })
                         .map((data) => {
                              return [
                                  <div className="noja__powers">
                                       <div className="noja__img">
                                              <img src={data.img} alt="noja__img"/>
                                       </div>
                                       <h2>{data.name}</h2>

                                  </div>
                              ]
                         })}
                        
                    </div>

               </div>
             
        </div>
    )
}
export default MoreProduct;