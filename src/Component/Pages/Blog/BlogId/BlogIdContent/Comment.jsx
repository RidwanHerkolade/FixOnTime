import React,{useState} from "react";
import './IdContent.css'
import CommentNote from "./CommentNote";
const Comment = () => {
    const [noteInput, setNoteInput] = useState("");
    const [comments, setComments] = useState([]);
    const [error, setError] = useState([])
    const handleChange = (event) => {
        setNoteInput(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const validation = handleErrors(noteInput);
        if(Object.keys(validation).length !== 0){
            return;
        }
        setComments((prevComments) => {
             return[
                ...prevComments,
                noteInput
             ]
        })



    };
    const handleErrors = (formValue) => {
        const errors = {}
        if(!formValue.textArea) {
            errors.textArea = "Kindly fill in your comment"
        }
        setError(errors)
        return errors;

    }
    // const handleClick = (id) => {
    //         setComments((prevComments) => {
    //              return (
    //                 prevComments.filter((comments, index) => {
    //                      return index !== id;
    //                 })
    //              )
    //         })
    // }
   
    return (
         <div className="comment__div"> 
               <h1>Add comment</h1>
               <form onSubmit={handleSubmit}>
                    <div className="form__comment">
                    <div className="comment__input">
                         <textarea type="text" name="textArea"  onChange={handleChange}/>
                    </div>   
                    <p className="errors">{error.textArea}</p>  
                     <div className="comment__button">
                         <div className="comment__cancel" >Cancel</div>
                         <button type="submit">Comment</button>
                    </div>
                    </div>
               </form>
               <CommentNote comments={comments}/>
         </div>
    )
}
export default Comment;