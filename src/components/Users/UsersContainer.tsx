import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {AllStateType} from '../../redux/redux-store';
import {FollowAC, InitialStateUsersReducerType, SetUsersAC, UnfollowAC, UserType} from '../../redux/usersReducer';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    state: InitialStateUsersReducerType
}

type MapDispatchToPropsType = {
    follow: (UserId: number) => void
    unfollow: (UserId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type MapStateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {
        state: state.usersReducer
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (UserId: number) => {
            dispatch(FollowAC(UserId))
        },
        unfollow: (UserId: number) => {
            dispatch(UnfollowAC(UserId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(SetUsersAC(users))
        }
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)