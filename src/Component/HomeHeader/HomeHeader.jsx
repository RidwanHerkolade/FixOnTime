import React from "react";
import HomeData from "./HomeData";
import './HomeHeader.css';
import Slider from "react-slick";




function HomeHeader(){

    const autoplay = {    
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       initialSlide: 0,
       responsive: [
 
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          
        }
      }
    ]

}
    
       return (
              <div className="home__header">
                <div className="home__grid">
                    <div className="home__display">
                         <h1>We are a Distribution Network Contractor and Power System Automation Team of Professionals. </h1>
                         <small>Reduce trippings and outages on your electricity network.</small>
                          <div className="btn">get in touch</div>


                    </div>
                </div>

                <div className="home__slides">
                     <div className="slides">
                        {/* <Slider {...autoplay}> */}
                         {HomeData.map((data) => {
                          return [
                             <div className="home__img">
                                 <img src={data.img} alt="descriptiion"/>
                             </div>
                         ]
                        })}
                                  
                        {/* </Slider> */}
                      
                     </div>


                </div>
                 
              </div>


       )
     
}
export default HomeHeader;