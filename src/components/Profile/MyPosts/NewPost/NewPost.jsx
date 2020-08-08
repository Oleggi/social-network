import React from "react";
import s from "./NewPost.module.css";
import { reset, Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/formControllers/FormControls";
import { required, maxLength } from "../../../../Utils/formValidators";

const maxLength50 = maxLength(50);
class NewPost extends React.Component {
  submit = (postData, dispatch) => {
    this.props.addPost(postData.post);
    dispatch(reset("newPost"));
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.submit)}
        className={s.new_post}
      >
        <Field name="post" component={Textarea} validate={[ required, maxLength50]} placeholder="Title"></Field>
        <div>
          <button>Add new post</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({form: "newPost"})(NewPost);
