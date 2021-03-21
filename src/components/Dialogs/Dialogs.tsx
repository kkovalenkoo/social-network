import {AllActions, DialogsDataType} from '../../state/state';
import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {User} from './User/User';
import {ChangeEvent} from 'react';
import {addMessageAC, newMessageTextAC} from '../../state/dialogsReducer';

type DialogsPropsType = {
    dialogsData: DialogsDataType
    newMessageText: string
    dispatch: (action: AllActions) => void
}

export function Dialogs(props: DialogsPropsType) {

    const mapUsers = props.dialogsData.users.map(d => <User key={d.id} id={d.id} name={d.name}/>)
    const mapMessages = props.dialogsData.messages.map(m => <Message key={m.id} message={m.message}/>)

    const onChangeTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newMessageTextAC(e.currentTarget.value))
    }
    const onSendClick = () => {
        props.dispatch(addMessageAC())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {mapUsers}
            </div>
            <div className={s.messages}>
                {mapMessages}
                <div>
                    <textarea value={props.newMessageText} onChange={onChangeTextMessage}/>
                </div>
                <div>
                    <button onClick={onSendClick}>Send</button>
                </div>
            </div>

        </div>
    );
}