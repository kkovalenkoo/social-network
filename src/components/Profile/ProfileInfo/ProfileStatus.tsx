import React, {ChangeEvent, useEffect, useState} from 'react'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

    return (
        <div>
            {!editMode && <div><span onDoubleClick={activateEditMode}>{props.status || '-----'}</span></div>}
            {editMode && <div><input onChange={onChangeStatus}
                                     value={status}
                                     onBlur={deactivateEditMode}
                                     autoFocus={true}/></div>}
        </div>
    )
}