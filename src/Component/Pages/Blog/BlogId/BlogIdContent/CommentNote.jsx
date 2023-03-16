import React,{useState} from "react"
import './IdContent.css';



const CommentNote = ({comments}) => {
    const date = new Date();
   
     return(
        comments.map((text, index) => {
             return[
                    <div className="notes__div" key={index} index={index}>
                          <div className="note__divs">
                                <h2>Anonymous<span>{date.toLocaleDateString()}</span></h2>
                                <div className="text">{text}</div>
                    
                            </div>

                    </div>
                     ]
               })
     )
}
export default CommentNote;