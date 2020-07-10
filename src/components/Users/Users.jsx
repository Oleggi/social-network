import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import { followAPI } from "../API/api";

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
                props.checkIfFollowingActive(true, u.id);
                followAPI.unfollowUser(u.id).then((data) => {
                  if (data.resultCode === 0) {
                     props.unfollowUser(u.id);
                  }
                  props.checkIfFollowingActive(false, u.id);
                });
              }}
            >
              Unfollow
            </button>
          ) : (
            <button 
              disabled={props.isFollowingActive.some(id => id === u.id)}
              className={s.btn}
              onClick={() => {
                props.checkIfFollowingActive(true, u.id);
                followAPI.followUser(u.id).then((data) => {
                  if (data.resultCode === 0) {
                    props.followUser(u.id);
                  }
                  props.checkIfFollowingActive(false, u.id);
                  });
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
