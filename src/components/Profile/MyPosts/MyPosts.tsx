import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css';
import {PostDataType} from '../../../state/state';

type MyPostsPropsType = {
    postsData: Array<PostDataType>
    addPost: (postText: string) => void
    inputNewTextForPost: (newTextForPost: string) => void
    newTextForPost: string
}

export function MyPosts(props: MyPostsPropsType) {

    const onNewTextForPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.inputNewTextForPost(e.currentTarget.value);
    };
    const onAddPost = () => {
        props.addPost(props.newTextForPost);
    };
    const onKeyPress = (e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter') {
            props.addPost(props.newTextForPost);
        }
    };

    return (
        <div>
            <div className={s.myPostsBlock}>
                <h3>My posts</h3>
                <div>
                <textarea
                    value={props.newTextForPost}
                    onChange={onNewTextForPost}>
                </textarea>
                </div>
                <div>
                    <button onClick={onAddPost} onKeyPress={onKeyPress}>Add Post</button>
                </div>
            </div>
            <div>
                {props.postsData.map(p => <Post key={p.id} post={p.post} like={p.like} avatar={p.avatar}/>)}
            </div>
        </div>
    );
}

