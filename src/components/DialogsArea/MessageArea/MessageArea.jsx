import React from "react";
import NewMessage from "./NewMessage/NewMessage";
import MessageItem from "./Messages/MessageItem";
import s from "./MessageArea.module.css";

class MessageArea extends React.Component {
  render () {
    return (
      <div className={s.messages_area}>
        <div className={s.container}>
        {
         this.props.messages.map((message, index) => {
          return (
            <MessageItem
              key={index}
              status={message.status}
              message={message.message}
            />
          );
        })
        }
        </div>
        <NewMessage
        sendNewMessage={this.props.sendNewMessage}
        newMessageText={this.props.newMessageText}
        inputDataMessages={this.props.inputDataMessages}
      />
        
      </div>
    )
  }
};

export default MessageArea;
