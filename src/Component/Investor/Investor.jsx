import React from "react";
import InvestorData from "./InvestorData";
import './Investor.css'

function Investor(){
    return (
        <div className="investor__div">
            {InvestorData.map((data)=> {
                 return [
                    <div className="inves__div">
                         <img src={data.img} alt="inves.img"/>
                    </div>
                 ]
            })}
        </div>
    )
}
export default Investor;