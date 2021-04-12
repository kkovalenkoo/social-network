import React from 'react';
import {connect} from 'react-redux';
import {AllStateType} from '../../redux/redux-store';
import {
    follow,
    InitialStateUsersReducerType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserType
} from '../../redux/usersReducer';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../commonComponents/Preloader';

export class UsersAPIComponent extends React.Component<MapStateAndDispatchPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChange = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return <>
            {this.props.state.isFetching ? <Preloader/> : null}
            <Users currentPage={this.props.state.currentPage}
                   totalUsersCount={this.props.state.totalUsersCount}
                   pageSize={this.props.state.pageSize}
                   users={this.props.state.users}
                   onPageChange={this.onPageChange}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            /></>;
    }
}

type MapStateToPropsType = {
    state: InitialStateUsersReducerType
}

type MapDispatchToPropsType = {
    follow: (UserId: number) => void
    unfollow: (UserId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type MapStateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {
        state: state.usersReducer,
    };
};

/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(follow(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollow(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsers(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage));
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCount(count));
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetching(isFetching))
        }
    };
};*/

export const UsersContainer = connect(
    mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersAPIComponent);