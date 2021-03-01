import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div>
                    <NavLink to='/dialogs/1'>Yury</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/2'>Sergey</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/3'>Sasha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div>Hello</div>
                <div>Hi</div>
                <div>Yo</div>
            </div>
        </div>
    );
}