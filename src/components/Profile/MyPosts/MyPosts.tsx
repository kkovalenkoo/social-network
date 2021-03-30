import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css';
import {MapStateAndDispatchPropsType} from './MyPostsContainer';


export function MyPosts(props: MapStateAndDispatchPropsType) {

    const onNewTextForPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newTextForPost(e.currentTarget.value);
    };
    const onAddPost = () => {
        props.addPost();
    };
    const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.code === 'Enter') {
            props.keyPress();
        }
    };
    const mapProfileData = props.state.postsData.map(p => <Post key={p.id}
                                                                post={p.post}
                                                                like={p.like}
                                                                avatar={p.avatar}/>);

    return (
        <div>
            <div className={s.myPostsBlock}>
                <h3>My posts</h3>
                <div>
                <textarea
                    value={props.state.newTextForPost}
                    onChange={onNewTextForPost}
                    onKeyPress={onKeyPress}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div>
                {mapProfileData}
            </div>
        </div>
    );
}

