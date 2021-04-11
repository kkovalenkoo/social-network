export type UserReducerAC =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
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
    isFetching: false
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
        case 'SET-CURRENT-PAGE':{
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case 'TOGGLE-IS-FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
};

export const followAC = (UserId: number) => ({
    type: 'FOLLOW',
    UserId
} as const);
export const unfollowAC = (UserId: number) => ({
    type: 'UNFOLLOW',
    UserId
} as const);
export const setUsersAC = (users: Array<UserType>) => ({
    type: 'SET-USERS',
    users
} as const);
export const setCurrentPageAC = (currentPage: number) => ({
    type: 'SET-CURRENT-PAGE',
    currentPage
} as const);
export const setTotalUsersCountAC = (count: number) => ({type: 'SET-TOTAL-USERS-COUNT', count} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
