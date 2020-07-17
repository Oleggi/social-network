import MessageArea from "./MessageArea";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../Redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    inputDataMessages: state.dialogsPage.inputDataMessages,
    messages: state.dialogsPage.messages,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendNewMessage: () => {
      dispatch(addMessageActionCreator());
    },
    newMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const MessageAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageArea);

export default MessageAreaContainer;
