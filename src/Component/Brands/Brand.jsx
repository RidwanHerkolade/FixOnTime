import React from "react";
import BrandData from "./BrandData";
import './Brand.css'

function Brand(){
    return (
        <div className="brand__div">
             <div className="brand__divs">
                 <h2>These leading brands trust us</h2>
                  <div className="brands">
                       {BrandData.map((data)=> {
                            return [
                                <div className="brands__img">
                                     <img src={data.img} alt="brands__img"/>
                                </div>
                            ]
                       })}
                  </div>
             </div>
        </div>
    )
}
export default Brand;