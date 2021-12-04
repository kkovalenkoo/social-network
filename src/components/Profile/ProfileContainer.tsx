import React from 'react'
import {Profile} from './Profile'
import {connect} from 'react-redux'
import {getStatus, getUserProfile, ProfileType, savePhoto, updateStatus} from '../../redux/profileReducer'
import {AllStateType} from '../../redux/redux-store'
import {RouteComponentProps, withRouter} from 'react-router'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {getId, getIsAuth, getProfile, getUserStatus} from '../../redux/profileSelectors'

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    isAuth: boolean
    id: number | null
}
export type MapStateToPropsForRedirect = {
    auth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    savePhoto: (photo: File) => void
    updateStatus: (status: string) => void
}
export type MapStateAndDispatchPropsType = MapStateToPropsType & MapStateToPropsForRedirect & MapDispatchToPropsType

type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & MapStateAndDispatchPropsType

export class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.id)
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        savePhoto={this.props.savePhoto}
                        updateStatus={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {
        profile: getProfile(state),
        status: getUserStatus(state),
        isAuth: getIsAuth(state),
        id: getId(state)
    }
}

export default compose<React.ComponentType>(
    connect(
        mapStateToProps,
        {getUserProfile, getStatus, savePhoto, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)