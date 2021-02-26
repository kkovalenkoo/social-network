import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    post: string
    like: number
    avatar: string
}

export function Post(props: PostPropsType) {
    return (
        <div>
            <img className={s.avatar}
                 src={props.avatar}
                 alt="avatar"/>
            <span>{props.post}</span>
            <div>
                <span>likes {props.like}</span>
            </div>
        </div>
    );
}

