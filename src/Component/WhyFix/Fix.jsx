import React from "react";
import FixData from "./FixData";
import './Fix.css';

function Fix(){
    return (
        <div className="fix__div ">
            <div className="fix__divs">
            <h2>Why FixOnTime Electric? </h2>
             <div className="fix__grid">
                  <div className="fix__content">
                      {FixData.map((data)=> {
                        return [
                             <div className="fixs">
                                  <h3 className="h2">{data.header}</h3>
                                  <div className="contents">{data.content}</div>
                             </div>
                        ]
                      })}
                  </div>
                  {/* <div className="fix__img"> */}
                       <div className="fix__back">
                            <div className="fix__imgs">
                                <img src="../images/img63.png" alt="fix.png"/>
                            </div>
                            <div className="support">
                                <div className="support__icon">
                                     <img src="../images/vector.png"/>

                                </div>
                                <div className="team">
                                    <h2>team</h2>
                                    <h2>support</h2>
                                </div>
                            </div>
                           
                       </div>
                  {/* </div> */}

             </div>
             </div>
        </div>
    )
}
export default Fix;