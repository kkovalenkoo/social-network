import {Dispatch} from 'redux'
import {profileAPI, usersAPI} from '../api/api'

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
    status: '',
}

export const profileReducer = (state: InitialStateProfileReducerType = initialState, action: ProfileReducerAC): InitialStateProfileReducerType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: 3, avatar: '', post: action.newPostText, like: 0}
            return {...state, postsData: [...state.postsData, newPost]}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-STATUS':
            return {...state, status: action.status}
        case 'DELETE-POST':
            return {...state, postsData: state.postsData.filter(p => p.id !== action.id)}
        case 'SAVE-PHOTO-SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photo} as ProfileType}
        default:
            return state
    }
}

//Actions
export const addPostAC = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const)
export const setUserProfile = (profile: ProfileType | null) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
export const deletePost = (id: number) => ({type: 'DELETE-POST', id} as const)
export const savePhotoSuccess = (photo: any) => ({type: 'SAVE-PHOTO-SUCCESS', photo} as const)

//Thunks
export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    const res = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(res.data))
}
export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (photo: any) => async (dispatch: Dispatch) => {
    const res = await profileAPI.savePhoto(photo)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}

//Types
export type ProfileReducerAC =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

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