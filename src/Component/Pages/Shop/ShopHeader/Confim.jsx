import React from "react";
import './ShopHeader.css'

const Confirm = ({displayCancel}) => {
     return(
         <div className="confirm__divs">
              <div className="confirm__div">
                    <div className="confirm__img">
                        <img src="../images/imgC.png"/>
                    </div>
                    <h2>Sent</h2>
                    <p>Your request has been sent, FOT team will reach out to you as soon as possible</p>
                    <div className="ok" onClick={displayCancel}>Ok</div>
              </div>
         </div>
     )
}
export default Confirm;