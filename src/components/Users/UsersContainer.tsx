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
import {usersAPI} from '../../api/api';

export class UsersContainer extends React.Component<MapStateAndDispatchPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.state.currentPage, this.props.state.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChange = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.state.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
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

export default connect(
    mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);