import React from "react";
import {WrappedFieldProps} from "redux-form";
import s from './ImprovisedForm.module.css'

export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...restProps}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={`${s.improveFrom} ${hasError ? s.error : ''}`}>
            <textarea {...input} {...restProps}/>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...restProps}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={`${s.improveFrom} ${hasError ? s.error : ''}`}>
            <input {...input} {...restProps}/>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}