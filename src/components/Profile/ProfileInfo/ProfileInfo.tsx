import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profileReducer';
import {Preloader} from '../../commonComponents/Preloader';

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export function ProfileInfo(props: ProfileInfoPropsType) {

    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <img src="https://img.gazeta.ru/files3/173/6408173/1ca3f5-pic700-700x467-84454.jpg"/>
            <div className={s.profileInfoBlock}>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : ''}/>
                ava + description
            </div>
        </div>
    );
}

