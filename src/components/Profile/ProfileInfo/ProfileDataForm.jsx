import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input, Textarea } from "../../common/formControllers/FormControls";
import s from "../../Login/Login.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error, editModeOff }) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
        <label>Full name:</label>
        <Field
          name="fullName"
          component={Input}
          placeholder="Full name"
        />
        </div>
        <div>
            <label htmlFor="">About me:</label>
            <Field
          name="aboutMe"
          component={Textarea}
          placeholder="About me"
        />
        </div>
        <div>
            <label htmlFor="">Looking for a job:</label>
            <Field
          name="lookingForAJob"
          component={Input}
          type="checkbox"
        />
        </div>
        <div>
            <label htmlFor="">Professional skills and goals</label>
            <Field
          name="lookingForAJobDescription"
          component={Textarea}
          placeholder="Professional skills"
        />
        <div>{Object.keys(profile.contacts).map(key => {
            return (
                <div key={key}>
                    <label htmlFor="">{key}</label>
                    <Field name={"contacts." + key} component={Input} placeholder={key}/>
                </div>
            ) 
        })}</div>
        {error && <div className={s.commonError}>{error}</div>}
        </div>
            <button>Save</button>
            <button onClick={editModeOff}>Cancel</button>
        </form>
    )
  }

  export default reduxForm({ form: "edit-info" })(ProfileDataForm);
