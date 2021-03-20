import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css';
import {addPostAC, AllActions, InputNewTextForPostAC, PostDataType} from '../../../state/state';

type MyPostsPropsType = {
    postsData: Array<PostDataType>
    dispatch: (action: AllActions) => void
    newTextForPost: string
}

export function MyPosts(props: MyPostsPropsType) {

    const onNewTextForPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(InputNewTextForPostAC(e.currentTarget.value));
    };
    const onAddPost = () => {
        props.dispatch(addPostAC());
    };
    const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        debugger
        if (e.ctrlKey && e.code === 'Enter') {
            props.dispatch(addPostAC());
        }
    };

    return (
        <div>
            <div className={s.myPostsBlock}>
                <h3>My posts</h3>
                <div>
                <textarea
                    value={props.newTextForPost}
                    onChange={onNewTextForPost}
                    onKeyPress={onKeyPress}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div>
                {props.postsData.map(p => <Post key={p.id} post={p.post} like={p.like} avatar={p.avatar}/>)}
            </div>
        </div>
    );
}

