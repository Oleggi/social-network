import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  let usersArray = [
    {
      name: "Oleg",
      id: 1,
      followed: true,
      status: "I'm great!",
      userPhoto:
        "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",
      location: { country: "Ukraine", city: "Kyiv" },
    },
    {
      name: "John",
      id: 2,
      followed: false,
      status: "Feeling good!",
      userPhoto:
        "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",
      location: { country: "Melburn", city: "Australia" },
    },
    {
      name: "Peter",
      id: 3,
      followed: true,
      status: "Relaxing...",
      userPhoto:
        "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",
      location: { country: "Berlin", city: "Germany" },
    },
  ];
  if (props.users.length === 0) {
    props.setUsers(usersArray);
  }

  let users = props.users.map((u) => {
    return (
      <div key={u.id} className={s.user_item}>
        <span>
          <img src={u.userPhoto} alt="" />
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
          <div>{u.location.country}</div>
          <div>{u.location.city}</div>
        </span>
      </div>
    );
  });
  return (
  <div className={s.container}>{users} <button>Show more</button></div>
  )
};


export default Users;
