import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;
