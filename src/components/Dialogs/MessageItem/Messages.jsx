import React from "react";
import s from "./MessageItem.module.css";
import NewMessage from "./NewMessage";
import MessageItem from "./MessageItem";
// import { NavLink } from "react-router-dom";

const Messages = (props) => {
  return (
    <div>
      <MessageItem />
      <NewMessage />
    </div>
  );
};

export default Messages;
