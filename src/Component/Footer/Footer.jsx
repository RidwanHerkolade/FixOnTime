import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css'


function Footer(){
       return (
            <footer>
                    <div className="footer__div">
                         <div className="footer__links">
                             <div className="fixon__logo">
                                     <img src="../images/footer.png"/>

                            </div>
                             <div className="footer__links">
                                     <Link to="/" className="footers__links">home</Link>
                                     <Link to="/service" className="footers__links">our service</Link>
                                     <Link to="/shop" className="footers__links">shop</Link>
                                     <Link to="/class" className="footers__links">e-learning</Link>
                                     <Link to="/blog" className="footers__links">blog</Link>
                                     <Link to="/aboutapp" className="footers__links">about</Link>
                                     <Link to="/contact" className="footers__links">contact</Link>
                    
                            </div>
                
                        </div>
                        <div className="footer__divs">
                              <div className="footer__downs">Copyright © 2021 FixOnTimeTechnologies .</div>
                               <div className="footer__icons">
                                         <YouTubeIcon style={{ color: "#ffff", fontSize: "1rem" }} className="footers__icon"/>
                                         <LinkedInIcon style={{ color: "#ffff", fontSize: "1rem" }} className="footers__icon"/>
                                         <FacebookIcon style={{ color: "#ffff" , fontSize: "1rem"}} className="footers__icon"/>
                                         <InstagramIcon style={{ color: "#ffff", fontSize: "1rem" }} className="footers__icon"/>
                                        <TwitterIcon style={{ color: "#ffff", fontSize: "1rem" }} className="footers__icon"/>
                                </div>
                        </div>
                        
                         
                     </div>


             </footer>
       )
}
export default Footer;