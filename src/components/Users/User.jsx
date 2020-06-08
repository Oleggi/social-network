import React from "react";
import s from "./Users.module.css";

const User = (props) => {
    debugger;
  return (
    <div className={s.user_item}>
      <span>{props.name}</span>
      {props.followed === true ? <button onClick={props.unfollowUser}>Unfollow</button> : <button onClick={props.followUser}>Follow</button> }
      <span>{props.city}</span>
    </div>
  );
};

export default User;
