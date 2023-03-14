import React from "react";
import BlogData from "./BlogData";
import Help from "../../../Help/Help";
import {Link} from "react-router-dom"
import './BlogContent.css'

function BlogContent({search}){
    const date = new Date()
     return (
          <div className="blogcontentss__div">
                <div className="blogcontent__div">
                    <Help/>
                     {BlogData.filter((data) => {
                          return (
                               data.header.toLowerCase().includes(search)
                          )
                     }).map((data) => {
                        return [
                            <div className="blogcontent__divs">
                                  <div className="blogcontent__img">
                                       <img src={data.img}/>
                                  </div>
                                  <div className="blogcontent__header">
                                       <Link to={`/blogcontent/${data.id}`} className="h2">{data.header}</Link>
                                       <p>{data.tips}</p>
                                  </div>
                                  <div className="date">{date.toLocaleDateString()}</div>
                                  <div className="blogcontent__con">{data.content}</div>
                            </div>
                            

                        ]
                     })}
                </div>     
                
          </div>
     )
}
export default BlogContent;