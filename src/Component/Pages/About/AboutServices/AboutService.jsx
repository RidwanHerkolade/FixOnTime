import React, {useState} from "react";
import ServiceData from "./ServiceData";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './AboutService.css'
function AboutService(){
    const [show, setShow] = useState(false);
    const [isShow, setIsShow] = useState(false);

    function HandleClick(id){
        
            setIsShow((prevIsShow) => {
                return{

                    [id]: !prevIsShow[id]
                }
            })
            // setShow(!show)
      
    }

    return (
         <div className="aboutservice__div">
             <div className="aboutservice__divs">
                 <h2>Answers to your questions</h2>
                 <p>We answered questions so you don’t have to ask them.</p>
                 <p>Feel free to email us if you don’t find your answer here</p>
                 <a href="#">info@fixontime.com</a>
                 <div className="service__outline">
                      {ServiceData.map((data) => {
                         return [
                             <div className="outline__div">
                                 <div className="outline__divs">
                                      <div className="outline__head" key={data.id} onClick={() => {HandleClick(data.id)}}>
                                           <h3>{data.header}</h3>
                                            {show ? <ArrowForwardIosIcon/> : <KeyboardArrowDownIcon/>}
                                      </div>
                                     { isShow[data.id] && <div className="outline__content">{data.content}</div> }
                                 </div>
                             </div>
                         ]
                      })}
                 </div>
             </div>

         </div>
    )

}
export default AboutService;