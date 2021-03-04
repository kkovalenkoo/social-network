import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postDataType} from '../../index';

type ProfilePropsType = {
    postsData: Array<postDataType>
}

export function Profile(props: ProfilePropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}

