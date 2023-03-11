import React from "react";
import { Link } from "react-router-dom"
import TrendingFlatSharpIcon from '@mui/icons-material/TrendingFlatSharp';
import './Nav.css'
function NavHead(){
    return (
        <div className="links">
            <div className="route__links">
                <div className="fixon__logo">
                     <img src="../images/Fix.png"/>

                </div>
                <div className="router__links">
                      <Link to="/" className="nav__links">home</Link>
                      <Link to="/serviceapp" className="nav__links">our service</Link>
                      <Link to="/shopapp" className="nav__links">shop</Link>
                      <Link to="/class" className="nav__links">e-learning</Link>
                      <Link to="/blogapp/:blogappId" className="nav__links">blog</Link>
                      <Link to="/aboutapp" className="nav__links">about</Link>
                      <Link to="/contactapp" className="nav__links">contact</Link>
                    
                 </div>
                
            </div>
            <div className="router__service">
                 <div className="router__services">
                       <Link to="/" className="nav__link">Request a Service</Link>
                       <TrendingFlatSharpIcon style={{color: "#ffff", fontSize: '20px',}} className="arrow"/>
                     
                </div>
                       
             </div>
                
           
        </div>
    )
}
export default NavHead;