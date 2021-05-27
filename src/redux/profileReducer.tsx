import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';

export type ProfileReducerAC =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

export type InitialStateProfileReducerType = typeof initialState
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

const initialState = {
    postsData: [
        {
            id: 1,
            avatar: 'https://ss.sport-express.ru/userfiles/materials/156/1564657/large.jpg',
            post: `It's my first post`,
            like: 10
        },
        {
            id: 2,
            avatar: `https://ss.sport-express.ru/userfiles/materials/156/1564657/large.jpg`,
            post: 'Hello, how are you',
            like: 5
        }
    ],
    profile: null as ProfileType | null,
    status: ''
};

export const profileReducer = (state: InitialStateProfileReducerType = initialState, action: ProfileReducerAC): InitialStateProfileReducerType => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {id: 3, avatar: '', post: action.newPostText, like: 0};
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
};

export const addPostAC = (newPostText: string) => ({
    type: 'ADD-POST', newPostText
} as const);
export const setUserProfile = (profile: ProfileType | null) => ({
    type: 'SET-USER-PROFILE',
    profile
} as const);
export const setStatus = (status: string) => ({
    type: 'SET-STATUS',
    status
} as const);

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    };
};
export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    };
};
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    };
};