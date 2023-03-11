import React from "react";
import ReplData from "./ReplData";
import MoreProduct from "../MoreProduct/MoreProduct";

const Repl = ({search}) => {
    return (
        <div className="repl__divs">
               <div className="noja__divss">
                    <h1>REPL</h1>
                    <div className="noja__div">
                         {ReplData.filter((data) => {
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
               <MoreProduct search = {search}/>
        </div>
    )
}
export default Repl;