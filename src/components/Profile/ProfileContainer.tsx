import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {InitialStateProfileReducerType, ProfileType, setUserProfile} from '../../redux/profileReducer';
import {AllStateType} from '../../redux/redux-store';

export class ProfileAPIComponent extends React.Component<MapStateAndDispatchPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
       return <Profile {...this.props} profile={this.props.profile}/>;
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}
export type MapStateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {
        profile: state.profileReducer.profile
    }
};

export const ProfileContainer = connect(
    mapStateToProps,
    {setUserProfile})(ProfileAPIComponent);