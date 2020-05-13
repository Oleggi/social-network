import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.avatar}
        src="https://www.vippng.com/png/detail/235-2350325_dicks-out-for-harambe-sample-image-avatar-png.png"
        alt=""
      />
      {props.message}
      <div>Likes: { props.likes }  </div>
      </div> 
      
  );
};

export default Post;
