import React from "react";
import SystemData from "./SystemData";
import ServiceSystems from "./ServiceSystems";
import SystemService from "./SystemService";
import './ServiceSystem.css'

function ServiceSystem(){

    return (
         <div className="servicesystem__divs">
                
                       <div className="system__divs">
                            {SystemData.map((data)=> {
                                 return [
                                    <div className="service__system">
                                        <div className="system__contentss">
                                         <div className="systems__img">
                                             <img src={data.image} alt="system__img"/>
                                         </div>
                                         <div className="system__content"> 
                                            <div id="h2">
                                                  <h2>{data.header}</h2>
                                                  <h2>{data.headers}</h2>

                                            </div>
                                            
                                             <div className="system__contents">
                                                  {data.systemContent}
                                                  <div className="top">{data.systemContents}</div>
                                            </div>
                                             <div className="request__service">{data.service}</div>

                                         </div>
                                         </div>
                                    </div>
                                 ]
                            })}
                       </div>
                       <ServiceSystems/>
                       <SystemService/>

               
         </div>
    )
}
export default ServiceSystem;