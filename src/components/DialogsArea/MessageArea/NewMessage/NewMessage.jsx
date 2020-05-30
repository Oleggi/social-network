import React from "react";
import s from "../MessageArea.module.css";

const NewMessage = (props) => {
  
let newMessageChange = (e) => {
  let text = e.target.value;
  props.newMessageText(text);
}

  return (
    <div>
      <div className={s.new_message}>
        <textarea onChange={ newMessageChange } value={props.inputDataMessages} placeholder="Message" cols="40" rows="2"></textarea>
        <button onClick={props.sendNewMessage}>Send</button>
      </div>
    </div>
  );
};

export default NewMessage;
