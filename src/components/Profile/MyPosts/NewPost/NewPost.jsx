import React from "react";
import s from "./NewPost.module.css";
import { reset, Field, reduxForm } from "redux-form";

class NewPost extends React.Component {
  submit = (postData, dispatch) => {
    console.log(postData);
    dispatch(reset("newPost"));
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.submit)}
        className={s.new_post}
      >
        <Field name="post" component="textarea" placeholder="Title"></Field>
        <div>
          <button>Add new post</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({form: "newPost"})(NewPost);
