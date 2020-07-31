import React from "react";
import s from "../MessageArea.module.css";
import { reset, Field, reduxForm } from 'redux-form';
import { Textarea } from "../../../common/formControllers/FormControls";
import { required, maxLength } from "../../../../Utils/formValidators";

const maxLength15 = maxLength(15);
class NewMessage extends React.Component{
  submit = (value, dispatch) => {
    this.props.sendNewMessage(value.messageData);
    dispatch(reset("newMessage"))
  }

  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.submit)} className={s.new_message}>
          <Field type="text" component={Textarea} validate={[required, maxLength15]} name="messageData" placeholder="Type new message here" cols="40" rows="2"></Field>
          <button>Send</button>
        </form>
      </div>
    );
  }

  
};

export default reduxForm({form: "newMessage"})(NewMessage);;
