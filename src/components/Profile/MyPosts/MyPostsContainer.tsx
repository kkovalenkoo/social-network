import React from 'react';
import {AllActionCreators} from '../../../redux/redux-store';
import {addPostAC, InitialStateProfileReducerType, inputNewTextForPostAC} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';

type MyPostsPropsType = {
    state: InitialStateProfileReducerType
    dispatch: (action: AllActionCreators) => void
}

export function MyPostsContainer(props: MyPostsPropsType) {

    const newTextForPost = (text: string) => {
        props.dispatch(inputNewTextForPostAC(text));
    };
    const addPost = () => {
        props.dispatch(addPostAC());
    };
    const keyPress = () => {
        props.dispatch(addPostAC());
    };

    return <MyPosts state={props.state} newTextForPost={newTextForPost} addPost={addPost} keyPress={keyPress}/>;

}
