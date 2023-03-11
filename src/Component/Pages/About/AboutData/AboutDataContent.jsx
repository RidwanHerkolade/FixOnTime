import React from "react";
import AboutData from "./AboutData";
import './AboutData.css'

function AboutDataContent(){
    return (
        <div className="aboutdatacontent__div">
             <h2>Our core values</h2>
             <div className="aboutdatacontent__divs">
                 {AboutData.map((data)=> {
                      return [
                         <div className="aboutdata__contents">
                              <div className="aboutdatacon__img">
                                   <img src={data.img}/>
                              </div>
                              <h2>{data.header}</h2>
                              <div className="data__con">{data.content}</div>
                         </div>
                           
                      ]
                 })}

             </div>

        
        {/* <div className="about__data">
            <h2>Our core values</h2>
            <div className="about__datacontent">
            {AboutData.map((data) => {
                return [
                    <div className="aboutdata__grid">
                        <div className="img">
                             <img src={data.img}/>
                        </div>
                        <h2>{data.header}</h2>
                        <div className="data__con">{data.content}</div>
                    </div>
                ]
            })}
            </div>
        </div> */}
        </div>
    )
}

export default AboutDataContent;