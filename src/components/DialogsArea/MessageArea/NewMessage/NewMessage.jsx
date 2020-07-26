import React from "react";
import s from "../MessageArea.module.css";
import { reset, Field, reduxForm } from 'redux-form';

class NewMessage extends React.Component{
  submit = (value, dispatch) => {
    this.props.sendNewMessage(value.messageData);
    dispatch(reset("newMessage"))
  }
  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.submit)} className={s.new_message}>
          <Field type="text" component="textarea" name="messageData" placeholder="Message" cols="40" rows="2"></Field>
          <button>Send</button>
        </form>
      </div>
    );
  }

  
};

export default reduxForm({form: "newMessage"})(NewMessage);;
