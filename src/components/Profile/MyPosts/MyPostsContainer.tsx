import React from 'react';
import {AllStateType} from '../../../redux/redux-store';
import {addPostAC, InitialStateProfileReducerType, inputNewTextForPostAC} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    state: InitialStateProfileReducerType
}
type MapDispatchToPropsType = {
    newTextForPost: (text: string) => void
    addPost: () => void
    keyPress: () => void
}
export type MapStateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {
        state: state.profileReducer
    };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        newTextForPost: (text: string) => {
            dispatch(inputNewTextForPostAC(text));
        },
        addPost: () => {
            dispatch(addPostAC());
        },
        keyPress: () => {
            dispatch(addPostAC());
        }
    };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
