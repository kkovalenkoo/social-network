import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogsDataType = {
    id: number
    name: string
}
type MessagesDataType = {
    id: number
    message: string
}

export function Dialogs() {

    const dialogsData: Array<DialogsDataType> = [
        {id: 1, name: 'Yury'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Sasha'}
    ]
    const messagesData: Array<MessagesDataType> = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Yo'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsData.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>
                {messagesData.map(m => <Messages key={m.id} message={m.message}/>)}
            </div>
        </div>
    );
}

type DialogsItemPropsType = {
    id: number
    name: string
}
type MessagesPropsType = {
    message: string
}

function DialogItem(props: DialogsItemPropsType) {
    return (
        <div>
            <NavLink to={`/dialogs/1 ${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

function Messages(props: MessagesPropsType) {
    return (
        <div>{props.message}</div>
    );
}