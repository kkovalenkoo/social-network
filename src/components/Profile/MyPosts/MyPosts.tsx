import React from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css';
import {postDataType} from '../../../index';

type MyPostsPropsType = {
    postsData: Array<postDataType>
}

export function MyPosts(props: MyPostsPropsType) {
    return (
        <div>
            <div className={s.myPostsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div>
                {props.postsData.map(p => <Post key={p.id} post={p.post} like={p.like} avatar={p.avatar}/>)}
            </div>
        </div>
    );
}

