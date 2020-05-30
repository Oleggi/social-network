import React from "react";
import s from "../MessageArea.module.css";


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
