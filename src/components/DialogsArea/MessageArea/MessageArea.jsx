import React from "react";
import NewMessage from "./NewMessage/NewMessage";
import MessageItem from "./Messages/MessageItem";
import s from "./MessageArea.module.css";

const MessageArea = (props) => {
  debugger;
  let messagesElements = props.messages.map((message, index) => {
    return (
      <MessageItem
        key={index}
        status={message.status}
        message={message.message}
      />
    );
  });

  return (
    <div className={s.messages_area}>
      <div className={s.container}>
        <div>{messagesElements}</div>
      </div>
      <NewMessage
        sendNewMessage={props.sendNewMessage}
        newMessageText={props.newMessageText}
        inputDataMessages={props.inputDataMessages}
      />
    </div>
  );
};

export default MessageArea;
