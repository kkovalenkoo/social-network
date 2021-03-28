import React from 'react';
import {AllActionCreators} from '../../redux/redux-store';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {InitialStateProfileReducerType} from '../../redux/profileReducer';

type ProfilePropsType = {
    profileData: InitialStateProfileReducerType
    dispatch: (action: AllActionCreators) => void
}

export function Profile(props: ProfilePropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts profileData={props.profileData}
                     dispatch={props.dispatch}/>
        </div>
    );
}

