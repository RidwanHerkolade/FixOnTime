import React,{useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import NojaPower from "../NojaPower/NojaPower";
import './ShopSearch.css'


const ShopSearch = () => {
    const [search, setSearch] = useState();

    const handleSearch = (event) => {
        setSearch(event.target.value);

     
    }
    return (
        <div className="shopSearchh__div">
              <form>
                     <div className="form__search">
                           <input type="text" placeholder="search" onChange={handleSearch} value={search}/>
                            <SearchIcon className="shop__icon" style={{"fontSize": "1.3rem", "color": "#A8A8A8", "fontWeight": "300"}}/>

                    </div>
                    <select>
                         <option value="option 1">All product</option>
                         <option>All product</option>
                         <option>All product</option>
                         <option>All product</option>
                    </select>
              </form>
              <NojaPower search={search}/>
        </div>
    )
}
export default ShopSearch;