import React from 'react';
import s from './ProfileInfo.module.css';

export function ProfileInfo() {
    return (
        <div>
            <img src="https://img.gazeta.ru/files3/173/6408173/1ca3f5-pic700-700x467-84454.jpg"/>
            <div className={s.profileInfoBlock}>ava + description</div>
        </div>
    );
}

