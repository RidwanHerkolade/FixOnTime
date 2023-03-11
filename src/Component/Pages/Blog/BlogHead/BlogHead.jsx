import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import './BlogHead.css'
import BlogContent from "../BlogContent/BlogContent";

function BlogHead(){
     const [search, setSearch] = useState("");
     function handleChange(event){
         setSearch(event.target.value)  
     }
    return (
          <div>
                <div className="blog__head">
                      <h2>The FixOnTime Blog</h2>
                      <p>Actionable tips. Curated for you.</p>
                      <form>
                           <input type="text" placeholder="search" onChange={handleChange} />
                            <SearchIcon className="search__icon" style={{"fontSize": "1.3rem", "color": "#A8A8A8", "fontWeight": "300"}}/>
                     </form>
               </div>
                 <BlogContent search={search}/>
         </div>
    )
}
export default BlogHead;