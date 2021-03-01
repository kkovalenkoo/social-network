import React from 'react';
import {MyPosts} from './My Posts/MyPosts';

export function Profile() {
    return (
            <div>
                <img src="https://img.gazeta.ru/files3/173/6408173/1ca3f5-pic700-700x467-84454.jpg"/>
                <div>ava + description</div>
                <MyPosts/>
            </div>
    );
}

