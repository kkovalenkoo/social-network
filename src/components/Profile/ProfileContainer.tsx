import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profileReducer';
import {AllStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router';

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}
export type MapStateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & MapStateAndDispatchPropsType


export class ProfileAPIComponent extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}


const WithUrlDataContainerComponent = withRouter(ProfileAPIComponent);

const mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {
        profile: state.profileReducer.profile
    };
};

export const ProfileContainer = connect(
    mapStateToProps,
    {setUserProfile})(WithUrlDataContainerComponent);
