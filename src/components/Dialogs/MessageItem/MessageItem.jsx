import React from "react";
// import s from "./Message.module.css";
// import { NavLink } from "react-router-dom";

const MessageItem = (props) => {
  return (
    <div>
      <div>{props.message}</div>
    </div>
  );
};

export default MessageItem ;
