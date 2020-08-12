import React, { Component } from "react";
import s from "./Dialogs.module.css";
import DialogContainer from "./Dialogs/DialogContainer";
import MessageAreaContainer from "./MessageArea/MessageAreaContainer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../Hoc/withAuthRedirect";
import { compose } from "redux";

class DialogsAreaContainer extends Component {
  render () {
    return (
      <div className={s.dialog_wrapper}>
        <div className={s.dialogs}>
          <div className={s.dialog_item}>
            <DialogContainer />
          </div>
        </div>
        <div className={s.messages}>
          <MessageAreaContainer />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
})

export default compose
(
connect(mapStateToProps),
withAuthRedirect
)
(DialogsAreaContainer);


