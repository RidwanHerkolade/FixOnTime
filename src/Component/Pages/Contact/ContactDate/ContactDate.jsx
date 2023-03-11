import React from "react";
import './ContactDate.css'


function ContactDate(){
   
    const dateTime = {
        id: "1",
        day1: "Monday",
        day2: "Saturday",
        day3: "Sunday",
        day5: "24hr/7days",
        day4: "Emergency on call basis",
        time1: "08:00am – 06:00pm",
        time2: "07:00am – 07:00pm",


    };
      return (
          <div className="contactdate__divs">
                 <div className="contactdate__div">
                      <div className="contactdate__img">
                             <img src="../images/sleek.png"/>
                      </div>
                      <div className="contactdate__content">
                             <h2>Work Hours </h2>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium eget non amet laoreet volutpat nibh rutrum pretium. </p>
                      </div>
                      <div className="contactdate__time">
                            
                                    <div className="contact">
                                         <div className="contact__day">{dateTime.day1}-{dateTime.day2}</div>
                                         <div className="contact__date">{dateTime.time1}</div>
                                   </div>
                                   
                                   <div className="contact">
                                         <div className="contact__day">{dateTime.day3}</div>
                                         <div className="contact__date">{dateTime.time2}</div>
                                   </div>
                                   <div className="contact">
                                         <div className="contact__day">{dateTime.day4}</div>
                                         <div className="contact__date">{dateTime.day5}</div>
                                   </div>
                        
                      </div>
                  
                </div>
              
          </div>
      )
}
export default ContactDate;