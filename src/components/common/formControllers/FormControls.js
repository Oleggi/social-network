import React from "react";
import s from "./formControls.module.css"

export const Textarea = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError? s.error: "")}>
                <textarea {...input} {...props}/>
                {hasError && <div className={s.error_message}>{meta.error}</div>}
        </div>
    )
} 

export const Input = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError? s.error: "")}>
                <input {...input} {...props}/>
                {hasError && <span className={s.error_message}>{meta.error}</span>}
        </div>
    )
} 

