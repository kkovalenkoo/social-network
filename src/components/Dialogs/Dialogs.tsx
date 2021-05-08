import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {MessageAuthor} from './MessageAuthor/MessageAuthor';
import React, {ChangeEvent} from 'react';
import {MapStateAndDispatchPropsType} from './DialogsContainer';


export function Dialogs(props: MapStateAndDispatchPropsType) {

    const mapUsers = props.state.messageAuthor.map(d => <MessageAuthor key={d.id} id={d.id} name={d.name}/>);
    const mapMessages = props.state.messages.map(m => <Message key={m.id} message={m.message}/>);

    const onChangeTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeTextMessage(e.currentTarget.value);
    };
    const onSendClick = () => {
        props.sendClick();
    };

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