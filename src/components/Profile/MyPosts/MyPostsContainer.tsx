import React from 'react';
import {AllStateType} from '../../../redux/redux-store';
import {addPostAC, InitialStateProfileReducerType} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    state: InitialStateProfileReducerType
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}
export type MapStateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {
        state: state.profileReducer
    };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText));
        }
    };
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
