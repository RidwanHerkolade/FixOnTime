import React from "react"; 
import './Nav.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function Nav() {
    return (           
        <nav className="nav__list">
             <div className="nav__lists">
                   <ul className="email">
                        <li className="communication__list">
                            <LocalPhoneIcon style={{ color: "#ffff", fontSize: "1rem" }}/>
                            <a href="">Phone: +2348035328274</a>
                        </li>
                        <li className="communication__list">
                             < EmailIcon style={{ color: "#ffff", fontSize: "1rem" }}/>
                            <a href="">Email: info@fixontime.com</a>
                        </li>
                        <li className="communication__list">
                            <WatchLaterIcon style={{ color: "#ffff", fontSize: "1rem" }}/>
                            <a href="">Hours: Mon-Sat 08:00 – 06:00</a>
                        </li>
                    </ul>
                     <div className="icons">
                         <YouTubeIcon style={{ color: "#ffff", fontSize: "1rem" }} className="icon"/>
                         <LinkedInIcon style={{ color: "#ffff", fontSize: "1rem" }} className="icon"/>
                         <FacebookIcon style={{ color: "#ffff" , fontSize: "1rem"}} className="icon"/>
                         <InstagramIcon style={{ color: "#ffff", fontSize: "1rem" }} className="icon"/>
                          <TwitterIcon style={{ color: "#ffff", fontSize: "1rem" }} className="icon"/>
                     </div>

             </div>
        </nav>
    )
}
export default Nav;