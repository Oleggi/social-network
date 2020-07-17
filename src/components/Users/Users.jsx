import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let amountOfPages = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= amountOfPages; i++) {
    pages.push(i);
  }
  return (
    <div className={s.container}>
      <div className={s.pages_container}>
        {pages.map((p, i) => {
          return (
            <div
              key={i}
              className={p === props.currentPage ? s.active_page : ""}
              onClick={() => {
                props.onPageChange(p);
              }}
            >
              {p}
            </div>
          );
        })}
        <span>{">>"}</span>
      </div>

      {props.users.map((u) => (
        <div key={u.id} className={s.user_item}>
          <NavLink to={"/profile/" + u.id}>
            <span>
              <img src={u.photos.small} alt="" />
            </span>
          </NavLink>
          <span>{u.name}</span>
          {u.followed ? (
            <button 
              disabled={props.isFollowingActive.some(id => id === u.id)}
              className={s.btn}
              onClick={() => {
                props.unfollow(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button 
              disabled={props.isFollowingActive.some(id => id === u.id)}
              className={s.btn}
              onClick={() => {
                props.follow(u.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;
