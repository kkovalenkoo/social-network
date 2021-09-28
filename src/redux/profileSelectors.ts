import {AllStateType} from './redux-store'

export const getProfile = (state: AllStateType) => {
    return state.profileReducer.profile
}
export const getUserStatus = (state: AllStateType) => {
    return state.profileReducer.status
}
export const getIsAuth = (state: AllStateType) => {
    return state.authReducer.isAuth
}
export const getId = (state: AllStateType) => {
    return state.authReducer.id
}