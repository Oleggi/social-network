import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

  let dialogs = props.state.dialogs.map((dialog, index) => {
    return <DialogItem key={index} id={dialog.id} name={dialog.name} avatar={dialog.photo}/>;
  });

  let messagesElements = props.state.messages.map((message, index) => {
    return <MessageItem key={index} status={message.status} message={message.message} />;
  });

  return (
    <div className={s.dialog_wrapper}>
      <div className={s.dialogs}>
        <h2>Dialogs:</h2>
        <div className={s.dialog_item}>{dialogs}</div>
      </div>
      <div className={s.messages}>
        <h2>Messages</h2>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
