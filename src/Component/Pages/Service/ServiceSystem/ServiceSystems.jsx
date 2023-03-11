import React from "react";
import SysData from "./SysData";
import './ServiceSystem.css'

function ServiceSystems() {
     return (
         <div className="service__sys">
              <div className="sys__grid">
                {SysData.map((data) => {
                    return [
                        <div className="sys__divs">
                        <div className="system__content">
                             <div id="h2">
                                  <h2>{data.header}</h2>
                                  <h2>{data.headers}</h2>
                             </div>
                             <div className="system__contents">{data.systemContent}
                                     <div className="top">{data.systemContents}</div>
                             </div>
                              <div className="request__service">Request service</div>
                        </div>
                        <div className="sys__image">
                             <img src="../images/recs1666.png"/>
                        </div>
                        </div>
                    ]
                })}
                   
              </div>
         </div>
     )
}
export default ServiceSystems;