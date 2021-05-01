import React from 'react';
import {connect} from 'react-redux';
import {AllStateType} from '../../redux/redux-store';
import {
    follow,
    followSuccess,
    getUsers,
    InitialStateUsersReducerType,
    setCurrentPage,
    toggleFollowingProgress, unfollow,
    unfollowSuccess
} from '../../redux/usersReducer';
import {Users} from './Users';
import {Preloader} from '../commonComponents/Preloader';

export class UsersContainer extends React.Component<MapStateAndDispatchPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.state.currentPage, this.props.state.pageSize);
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.state.pageSize);
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
                   followingInProgress={this.props.state.followingInProgress}
            /></>;
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
    {
        follow, unfollow, followSuccess, unfollowSuccess,
        setCurrentPage, toggleFollowingProgress, getUsers
    })(UsersContainer);