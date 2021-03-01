import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogItem id={1} name='Yury'/>
                <DialogItem id={2} name='Sergey'/>
                <DialogItem id={3} name='Sasha'/>
            </div>
            <div className={s.messages}>
                <Massages message='Hello'/>
                <Massages message='Hi'/>
                <Massages message='Yo'/>
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

function Massages(props: MessagesPropsType) {
    return (
        <div>{props.message}</div>
    );
}