import React from "react";
import './Help.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Help() {
     return (
          <div className="help__div">
               <div className="help__divss">
                    <WhatsAppIcon style={{"color": " white", "fontSize": "1.5rem"}} className="help__icon"/>    
                    <h2>Need Help?</h2>
                 
               </div>
                      
          </div>
     )
}
export default Help;