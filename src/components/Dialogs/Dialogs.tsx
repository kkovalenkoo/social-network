import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {DialogsType} from '../../index';
import {User} from './User/User';

type DialogsPropsType = {
    dialogsData: DialogsType
}

export function Dialogs(props: DialogsPropsType) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {props.dialogsData.users.map(d => <User key={d.id} id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsData.messages.map(m => <Message key={m.id} message={m.message}/>)}
            </div>

        </div>
    );
}