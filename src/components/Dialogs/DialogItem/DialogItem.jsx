import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
  let avatar = props.avatar;
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <div className={s.dialog}>
        <NavLink activeClassName={s.active} to={path}>
        <img src={avatar} alt=""/>
         <div className={s.dialog_name}>{props.name}</div>
        </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
