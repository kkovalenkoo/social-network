import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './My Posts/MyPosts';

export function Profile() {
    return (
            <div className={s.content}>
                <img src="https://img.gazeta.ru/files3/173/6408173/1ca3f5-pic700-700x467-84454.jpg"/>
                <div>ava + description</div>
                <MyPosts/>
            </div>
    );
}

