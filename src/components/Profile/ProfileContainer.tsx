import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileType} from '../../redux/profileReducer';
import {AllStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router';
import {InitialStateAuthReducerType} from '../../redux/authReducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type MapStateToPropsType = {
    profile: ProfileType | null

}
export type MapStateToPropsForRedirect = {
    auth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
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
            userId = '2';
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return <Profile profile={this.props.profile}/>;
    }
}

const mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {
        profile: state.profileReducer.profile,
    };
};

export default compose<React.ComponentType>(
    connect(
        mapStateToProps,
        {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);