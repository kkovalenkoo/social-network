import React from 'react';
import {AllActionCreators} from '../../redux/redux-store';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {InitialStateProfileReducerType} from '../../redux/profileReducer';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    state: InitialStateProfileReducerType
    dispatch: (action: AllActionCreators) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer state={props.state}
                              dispatch={props.dispatch}/>
        </div>
    );
}

