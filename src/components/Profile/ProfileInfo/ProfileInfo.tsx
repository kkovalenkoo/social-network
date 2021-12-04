import React, {ChangeEvent} from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/profileReducer'
import {Preloader} from '../../commonComponents/Preloader/Preloader'
import {ProfileStatus} from './ProfileStatus'
import userPhoto from '../../../photos/userPhoto.png'

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
    isOwner: boolean
}

export function ProfileInfo(props: ProfileInfoPropsType) {

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profileInfoBlock}>
            <img src={props.profile.photos.large || userPhoto} alt="default pic"/>
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

