import React from 'react';
import {postDataType} from '../../state/state';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

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

