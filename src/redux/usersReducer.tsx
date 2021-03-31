export type UserReducerAC =
    ReturnType<typeof FollowAC>
    | ReturnType<typeof UnfollowAC>
    | ReturnType<typeof SetUsersAC>
export type UserType = {
    id: number
    avatar: string
    followed: boolean
    fullName: string
    status: string
    location: {city: string, country: string}
}

export type InitialStateUsersReducerType = typeof initialState

const initialState = {
    users: [] as Array<UserType>
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
        case 'SET-USERS':{
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
};

export const FollowAC = (UserId: number) => ({
    type: 'FOLLOW',
    UserId
} as const);

export const UnfollowAC = (UserId: number) => ({
    type: 'UNFOLLOW',
    UserId
} as const);

export const SetUsersAC = (users: Array<UserType>) => ({
    type: 'SET-USERS',
    users
} as const);
