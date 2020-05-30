import React from "react";
import s from "./NewPost.module.css";

const NewPost = (props) => {

  
  let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
  }


    return (
      <div className={s.new_post}>
        <textarea onChange={ onPostChange } value={props.inputData} ></textarea>
        <div>
          <button onClick={props.addPost}>Add new post</button>
        </div>
      </div>
    );
}

export default NewPost;
