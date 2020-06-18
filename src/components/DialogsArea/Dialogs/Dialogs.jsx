import React from "react";
import DialogItem from "./DialogItem";

class Dialogs extends React.Component {
  render () {
    return (
      <div>
        {
  this.props.dialogs.map((dialog, index) => {
    return <DialogItem key={index} id={dialog.id} message={dialog.message} name={dialog.name} avatar={dialog.photo}/>;
    })
        }
      </div>
    )
  }
};

export default Dialogs;
