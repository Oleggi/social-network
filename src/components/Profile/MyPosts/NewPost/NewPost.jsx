import React from "react";
import s from "./NewPost.module.css";

const NewPost = (props) => {

  
  let onBodyChange = (e) => {
    let text = e.target.value;
    props.onBodyChange(text);
  }

  let onTitleChange = (e) => {
    let text = e.target.value;
    props.onTitleChange(text);
  }


    return (
      <div className={s.new_post}>
        <div><textarea onChange={ onTitleChange } value={props.inputDataTitle} placeholder="Title"></textarea></div>
        <textarea onChange={ onBodyChange } value={props.inputDataBody} placeholder="Text"></textarea>
        <div>
          <button onClick={props.addPost}>Add new post</button>
        </div>
      </div>
    );
}

export default NewPost;
