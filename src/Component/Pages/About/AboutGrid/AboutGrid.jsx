import React from "react";
import './AboutGrid.css'

function AboutGrid(){
     return (
         <div className="about__divs">
                <div className="about__grid">
                     <div className="about__contents">
                         <p className="para__about">We are a leading engineering, procurement, and construction company. </p>
                         <div className="aboutgrid__content">FixOnTime is certified to carry out electrical engineering works and deploy its products within the Nigerian Electricity Supply Industry. We have strong design experience, and we are one of the leaders in sourcing equipment that brings solutions to electrical challenges. <br></br><br></br>We are distribution network contracts and power automation professionals. We provide electrical power solutions through equipment procurement, contracting, and maintenance.  We offer global standard electrical services for utilities, contractors, and electrical SME manufacturers. </div>
                     </div>
                     <div className="aboutgrids__img">
                           <div className="aboutgrid__img">
                                  <img src="../images/img60.png" alt="about__img"/>
                           </div>
                           <div className="small__img">
                                 <img src="../images/small.png"/>

                            </div>
                            <div className="aboutgrids__btn">Need Help?</div>

                     </div>
                  
                </div>
         </div>
     )
}
export default AboutGrid;