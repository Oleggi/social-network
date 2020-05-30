import React from "react";
import s from "../Sidebar.module.css";

const FriendItem = (props) => {
  return (
    <div className={s.friend}>
        <div><img src={props.photo} alt=""/><div>{props.name}</div></div>
    </div>
  )
};


export default FriendItem;


