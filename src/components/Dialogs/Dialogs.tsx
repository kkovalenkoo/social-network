import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {User} from './User/User';
import {ChangeEvent} from 'react';
import {InitialStateDialogsDataType} from '../../redux/dialogsReducer';

type DialogsPropsType = {
    state: InitialStateDialogsDataType
    changeTextMessage: (text: string) => void
    sendClick: () => void
}

export function Dialogs(props: DialogsPropsType) {

    const mapUsers = props.state.users.map(d => <User key={d.id} id={d.id} name={d.name}/>)
    const mapMessages = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const onChangeTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeTextMessage(e.currentTarget.value)
    }
    const onSendClick = () => {
        props.sendClick()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {mapUsers}
            </div>
            <div className={s.messages}>
                {mapMessages}
                <div>
                    <textarea value={props.state.newMessageText} onChange={onChangeTextMessage}/>
                </div>
                <div>
                    <button onClick={onSendClick}>Send</button>
                </div>
            </div>

        </div>
    );
}