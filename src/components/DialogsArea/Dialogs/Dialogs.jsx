import React from "react";
import DialogItem from "./DialogItem";

const Dialogs = (props) => {
let dialogs = props.dialogs.map((dialog, index) => {
    return <DialogItem key={index} id={dialog.id} message={dialog.message} name={dialog.name} avatar={dialog.photo}/>;
    });
    
  return (
    <div>
        {dialogs}
    </div>
  );
};

export default Dialogs;
