import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, ProfileType, updateStatus} from '../../redux/profileReducer';
import {AllStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}
export type MapStateToPropsForRedirect = {
    auth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
export type MapStateAndDispatchPropsType = MapStateToPropsType & MapStateToPropsForRedirect & MapDispatchToPropsType

type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & MapStateAndDispatchPropsType

export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '13812';
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/>;
    }
}

const mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status
    };
};

export default compose<React.ComponentType>(
    connect(
        mapStateToProps,
        {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);