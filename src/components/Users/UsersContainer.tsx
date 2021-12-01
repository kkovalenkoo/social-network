import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {AllStateType} from '../../redux/redux-store'
import {
    follow,
    followSuccess,
    getUsers,
    InitialStateUsersReducerType,
    setCurrentPage,
    toggleFollowingProgress, unfollow,
    unfollowSuccess
} from '../../redux/usersReducer'
import {Users} from './Users'
import {Preloader} from '../commonComponents/Preloader/Preloader'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

export class UsersContainer extends React.Component<MapStateAndDispatchPropsType> {

    componentDidMount() {
        const {getUsers, state} = this.props
        getUsers(state.currentPage, state.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        const {getUsers, state} = this.props
        getUsers(pageNumber,state.pageSize)
    }

    render() {

        const {state, follow, unfollow} = this.props

        return <>
            {state.isFetching ? <Preloader/> : null}
            <Users currentPage={state.currentPage}
                   totalUsersCount={state.totalUsersCount}
                   pageSize={state.pageSize}
                   users={state.users}
                   onPageChange={this.onPageChange}
                   follow={follow}
                   unfollow={unfollow}
                   followingInProgress={state.followingInProgress}
            /></>
    }
}

type MapStateToPropsType = {
    state: InitialStateUsersReducerType
}

type MapDispatchToPropsType = {
    follow: (UserId: number) => void
    unfollow: (UserId: number) => void
    followSuccess: (UserId: number) => void
    unfollowSuccess: (UserId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (id: number, value: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type MapStateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {state: state.usersReducer}
}

export default compose<ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow, followSuccess, unfollowSuccess,
        setCurrentPage, toggleFollowingProgress, getUsers}),
    withAuthRedirect
)(UsersContainer)