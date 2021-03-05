import React from 'react';
import {PostDataType} from '../../state/state';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
    postsData: Array<PostDataType>
    addPost: (postText: string) => void
    inputNewTextForPost: (newTextForPost: string) => void
    newTextForPost: string
}

export function Profile(props: ProfilePropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     addPost={props.addPost}
                     inputNewTextForPost={props.inputNewTextForPost}
                     newTextForPost={props.newTextForPost}/>
        </div>
    );
}

