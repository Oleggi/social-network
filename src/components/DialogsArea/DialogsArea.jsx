import React from "react";
import s from "./Dialogs.module.css";
import DialogContainer from "./Dialogs/DialogContainer";
import MessageAreaContainer from "./MessageArea/MessageAreaContainer";

const DialogsArea = (props) => {
  debugger;
  return (
    <div className={s.dialog_wrapper}>
      <div className={s.dialogs}>
        <div className={s.dialog_item}>
          <DialogContainer store={props.store} />
        </div>
      </div>
      <div className={s.messages}>
        <MessageAreaContainer store={props.store} />
      </div>
    </div>
  );
};

export default DialogsArea;
