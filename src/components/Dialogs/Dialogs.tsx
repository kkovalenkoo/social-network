import s from './Dialogs.module.css'

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div>Yury</div>
                <div>Sergey</div>
                <div>Sasha</div>
            </div>
            <div className={s.messages}>
                <div>Hello</div>
                <div>Hi</div>
                <div>Yo</div>
            </div>
        </div>
    )
}