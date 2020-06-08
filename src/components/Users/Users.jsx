import React from 'react';
import User from "./User";
import s from "./Users.module.css";

const Users = (props) => {
    let users = props.users.map((u, index) => {
        return <User key={index} name={u.name} followed={u.followed}/>
    })
    return (
        <div className={s.container}>
            {users}
        </div>
    )
};

export default Users;