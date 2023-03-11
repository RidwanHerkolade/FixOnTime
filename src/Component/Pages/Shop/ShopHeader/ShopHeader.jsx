import React from "react";
import ShopHeaderData from "./ShopHeaderData";
import './ShopHeader.css'

const ShopHeader = () => {
      return (
          <div className="shop__header">
                <div className="shop__divs">
                      <div className="shopDivs__grid">
                           <h2>Products from Our Trusted Partners</h2>
                           {/* <h2>Our Trusted Partners</h2> */}
                           <p>Nigeria's Foremost Partner for Notable Manufacturers</p>
                           <div className="partners__div">
                               <h2>Partners</h2>
                               <div className="partnerdata__grid">
                               {ShopHeaderData.map((data) => {
                                   return [
                                       <div className="shopdata__img">
                                             <img src={data.img} alt="shopdata__img"/>
                                       </div>
                                   ]
                               })}
                               </div>
                           </div>
                      </div>
                       <div className="shopdivs__img">
                             <img src="../images/group175.png" alt="shopdiv__img"/>
                       </div>
                 </div>

          </div>
      )
}

export default ShopHeader;