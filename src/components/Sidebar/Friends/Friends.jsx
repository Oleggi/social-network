import React from "react";
import s from "../Sidebar.module.css";
import FriendItem from "./FriendItem";
import { NavLink } from "react-router-dom";

const Friends = (props) => {
  let friendItem = props.friends.map((f, index) => {
    return <FriendItem key={index} name={f.name} photo={f.photo} />;
  });
  return (
    <div className={s.friends}>
      <span className={s.title}>Friends</span>
      <span>
        <NavLink to="/friends">See All</NavLink>
      </span>
      <div className={s.friends_wrap}>{friendItem}</div>
    </div>
  );
};

export default Friends;
