import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.avatar}
        src="https://cdn0.iconfinder.com/data/icons/sexy-portrait-girl-avatar-cute-beautiful-young-gir/283/female-138-512.png"
        alt=""
      />

      { props.content }
      <div>Like { props.likes }  </div>
      <button>delete</button>
      </div> 
      
  );
};

export default Post;
