import React from "react";
import s from "./Users.module.css";
import photoUrl from "../../assets/images/user.png";

const Users = (props) => {
  let pagesSize = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesSize; i++) {
      pages.push(i);
    }

  return (
    <div className={s.container}>
      <div className={s.pages_container}>
      {
        pages.map((p,i) => {
        return <div key={i} className={p === props.currentPage?s.active_page:""} onClick={()=>{props.onPageChange(p)}}>{p}</div>
        })
      }
      </div>  
      {
      props.users.map(u=><div key={u.id} className={s.user_item}>
          <span>
            <img src={photoUrl} alt="" />
          </span>
          <span>{u.name}</span>
          {u.followed === true ? (
            <button
              onClick={() => {
                props.unfollowUser(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                props.followUser(u.id);
              }}
            >
              Follow
            </button>
          )}
          <div className={s.status}>{u.status}</div>
          <span>
            <div>{u.address.street}</div>
            <div>{u.address.city}</div>
          </span>
        </div>
      )
      }
    </div>
  );
}

export default Users;
