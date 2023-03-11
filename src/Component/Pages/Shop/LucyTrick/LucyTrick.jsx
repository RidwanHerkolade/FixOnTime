import React from "react";
import LucyTrickData from "./LucyTrickData";
import Repl from "../REPL/Repl";
import './LucyTrick.css'

const LucyTrick = ({search}) => {
      return (
          <div className="lucy__divs">
                 <div className="noja__divss">
                      <h1>Lucy Electric</h1>
                      <div className="noja__div">
                           {LucyTrickData.filter((data) => {
                                 return (
                                    data.name.toLowerCase().includes(search)
                                 )
                           }).map((data) => {
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
                 <Repl search={search}/>
          </div>
      )
}
export default LucyTrick;