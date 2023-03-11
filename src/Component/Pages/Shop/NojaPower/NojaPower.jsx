import React from "react";
import NojaData from "./NojaData";
import './NojaPower.css'
import LucyTrick from "../LucyTrick/LucyTrick";

const NojaPower = ({search}) => {
     return (
         <div className="noja__divs">
             
              <div className="noja__divss">
                    <h1>NojaPower</h1>
                    <div className="noja__div">
                     
                    {NojaData.filter((data) => {
                        return (
                            data.name.toLowerCase().includes(search)
                        )
                    }) .map((data) => {
                          return [
                              <div className="noja__powers">
                                   <div className="noja__img">
                                        <img src={data.img} alt="noja__img"/>
                                   </div>
                                   <h2>{data.name}</h2>
                              </div>
                          ]
                    })}
                       
                    </div>
                   
              </div>
              <LucyTrick search={search}/>
         </div>
     )
}
export default NojaPower;