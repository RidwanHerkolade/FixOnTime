import React from "react";
import BlogIdContent from "../BlogIdContent/BlogIdContent";
import './BlogIdHeader.css'

const BlogIdHeader = ({myData}) => {
   
      return (
             <div className="">
                  <div className="blogidheader__div">
                         <h2>{myData.header}</h2>
                  </div>

                  <BlogIdContent myData={myData}/>


             </div>
           
      )
}

export default BlogIdHeader;