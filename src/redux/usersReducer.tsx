import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

export type UserReducerAC =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
type PhotoType = {
    small: string
    large: string
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotoType
    status: string
    followed: boolean
}

export type InitialStateUsersReducerType = typeof initialState

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followingInProgress: [] as number[]
};

export const usersReducer = (state: InitialStateUsersReducerType = initialState, action: UserReducerAC): InitialStateUsersReducerType => {

    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.UserId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.UserId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        }
        case 'SET-USERS': {
            return {
                ...state,
                users: action.users
            };
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {
                ...state,
                totalUsersCount: action.count
            };
        }
        case 'TOGGLE-IS-FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case 'FOLLOWING-IN-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            };
        }
        default:
            return state;
    }
};

export const followSuccess = (UserId: number) => ({type: 'FOLLOW', UserId} as const);
export const unfollowSuccess = (UserId: number) => ({type: 'UNFOLLOW', UserId} as const);
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const);
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const);
export const setTotalUsersCount = (count: number) => ({type: 'SET-TOTAL-USERS-COUNT', count} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const);
export const toggleFollowingProgress = (id: number, followingInProgress: boolean) => ({
    type: 'FOLLOWING-IN-PROGRESS',
    id,
    followingInProgress
} as const);

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    };
};
export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(userId, true))
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(userId, false))
        });

    };
};
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(userId, true))
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(userId, false))
        });

    };
};