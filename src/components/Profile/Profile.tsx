import React from 'react';
import {AllActions, PostDataType} from '../../state/state';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
    postsData: Array<PostDataType>
    dispatch: (action: AllActions) => void
    newTextForPost: string
}

export function Profile(props: ProfilePropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     dispatch={props.dispatch}
                     newTextForPost={props.newTextForPost}/>
        </div>
    );
}

