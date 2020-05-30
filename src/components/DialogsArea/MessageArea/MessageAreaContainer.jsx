import React from "react";
import MessageArea from "./MessageArea";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../Redux/dialogs-reducer";
import StoreContext from "../../../StoreContext";

const MessageAreaContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let sendNewMessage = () => {
          let addMessage = addMessageActionCreator();
          store.dispatch(addMessage);
        };

        let newMessageText = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };
        return (
          <MessageArea
            inputDataMessages={state.dialogsPage.inputDataMessages}
            messages={state.dialogsPage.messages}
            sendNewMessage={sendNewMessage}
            newMessageText={newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessageAreaContainer;
