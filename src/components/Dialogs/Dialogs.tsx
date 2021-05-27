import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {MessageAuthor} from './MessageAuthor/MessageAuthor';
import React from 'react';
import {MapStateAndDispatchPropsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../commonComponents/ImprovisedForm/ImprovisedForm";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


export function Dialogs(props: MapStateAndDispatchPropsType) {

    const mapUsers = props.state.messageAuthor.map(d => <MessageAuthor key={d.id} id={d.id} name={d.name}/>);
    const mapMessages = props.state.messages.map(m => <Message key={m.id} message={m.message}/>);

    const addNewMessage = (value: FormDataType) => {
        props.sendMessage(value.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {mapUsers}
            </div>
            <div className={s.messages}>
                {mapMessages}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>

        </div>
    );
}

type FormDataType = {
    newMessageText: string
}

const maxLength10 = maxLengthCreator(10)

function AddMessageForm(props: InjectedFormProps<FormDataType>) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[requiredField, maxLength10]}
                       name={'newMessageText'}
                       placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)