import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../commonComponents/ImprovisedForm/ImprovisedForm";
import {requiredField} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}