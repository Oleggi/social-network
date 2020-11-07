import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import imgPlaceholder from "../../assets/images/avatar-placeholder.png";

const Users = (props) => {
  return (
    <div className={s.container}>
      <Paginator 
        onPageChange={props.onPageChange} 
        totalItemsCount={props.totalUsersCount} 
        pageSize={props.pageSize} 
        currentPage={props.currentPage} 
        portionSize={props.portionSize}
        />
      {props.users.map((u) => (
        <div key={u.id} className={s.user_item}>
          <NavLink to={"/profile/" + u.id}>
            <span>
              {u.photos.small ? <img src={u.photos.small} alt="" /> : <img src={imgPlaceholder} alt="" />}
            </span>
          </NavLink>
          <span className={s.user_name}>{u.name}</span>
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
}

export default Users;
