import MessageArea from "./MessageArea";
import {
  sendMessage
} from "../../../Redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendNewMessage: (message) => {
      dispatch(sendMessage(message));
    },
  };
};

const MessageAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageArea);

export default MessageAreaContainer;
