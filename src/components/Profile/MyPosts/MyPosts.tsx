import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css';
import {AllActionCreators} from '../../../redux/redux-store';
import {addPostAC, InitialStateProfileReducerType, inputNewTextForPostAC} from '../../../redux/profileReducer';

type MyPostsPropsType = {
    profileData: InitialStateProfileReducerType
    dispatch: (action: AllActionCreators) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const onNewTextForPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(inputNewTextForPostAC(e.currentTarget.value));
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
    const mapProfileData = props.profileData.postsData.map(p => <Post key={p.id}
                                                                      post={p.post}
                                                                      like={p.like}
                                                                      avatar={p.avatar}/>);

    return (
        <div>
            <div className={s.myPostsBlock}>
                <h3>My posts</h3>
                <div>
                <textarea
                    value={props.profileData.newTextForPost}
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

