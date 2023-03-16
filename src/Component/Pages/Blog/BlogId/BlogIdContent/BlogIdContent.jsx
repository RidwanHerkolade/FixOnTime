import React from "react";
import Comment from "./Comment";
import './IdContent.css'



const BlogIdContent = ({myData}) => {
     return (
         <div className="blogidcontent__content">
              <div className="blog__contents">
                   <div className="blogid__img">
                           <img src={myData.img} alt="blogid__img"/>
                   </div>
                   <div className="blogid__para">
                          {myData.contents}
                   </div>
              </div>
              <Comment/>

         </div>
     )
}
export default BlogIdContent;