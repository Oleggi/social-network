import React from "react";
import s from "./MessageItem.module.css";
// import { NavLink } from "react-router-dom";

const MessageItem = (props) => {
  if (props.status === 'sent') {
  return (
    <div>
      <div className={`${s.message_item} ${s.sent}`}>{props.message}</div>
    </div>
  );
  } else {
    return (
      <div>
        <div className={s.message_item}>{props.message}</div>
      </div>
    );
  }
};

export default MessageItem ;
