import React from "react";
import s from "./Dialogs.module.css";
import DialogContainer from "./Dialogs/DialogContainer";
import MessageAreaContainer from "./MessageArea/MessageAreaContainer";

const DialogsArea = (props) => {
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
};

export default DialogsArea;
