import React,{useState} from "react";
import Nav from "../../../NavBar/Nav";
import NavHead from "../../../NavBar/NavHead";
import details from "./details";
import Footer from "../../../Footer/Footer";
import './ShopHeader.css'
import { useNavigate, useParams } from "react-router-dom";

function ShopId(){

      const navigate = useNavigate();
      const [display, setDisplay] = useState(false);
      const { shopheaderId } = useParams();

      const shop = details.find(detail => detail.id === shopheaderId);

      const handleClick = () => {
           navigate('/enquiries');
           setDisplay(true);
     };

    return (
        
        <div className="shop__here">
              <Nav/>
             <NavHead/>
             <div className="shopid__divs">
                
                  <div className="shopgrid__grids">
                       <div className="shopid__img">
                            <img src={shop.images} alt="shop__dataimg"/>
                       </div>
                       <div className="shop__content">
                            <h2>{shop.name}</h2>
                            <p>Manufacturer: <img src={shop.nme}/></p>
                            <div className="download">Download brochure</div>
                            <div className="contents" >{shop.content}</div>
                            <div className="enquiries" onClick={handleClick}>{shop.enquire}</div>
                       </div>
                    
                  </div>
             </div>
             <Footer/>
        </div>
    )
}
export default ShopId;