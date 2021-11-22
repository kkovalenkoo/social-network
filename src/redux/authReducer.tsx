import {authAPI} from '../api/api'
import {Dispatch} from 'redux'
import {AppThunk} from './redux-store'
import {stopSubmit} from 'redux-form'

const initialState = {
    id: null as number | null,
    email: '' as string | null,
    login: '' as string | null,
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthReducerAC): InitialStateAuthReducerType => {
    switch (action.type) {
        case 'social-network/auth/SET-USER-DATA':
            return {...state, ...action.payload}
        default:
            return state
    }
}

//Actions
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'social-network/auth/SET-USER-DATA',
    payload: {id, login, email, isAuth}
} as const)

//Thunks
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = (): AppThunk =>
    async dispatch => {
        const res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }

//Types
export type AuthReducerAC = ReturnType<typeof setAuthUserData>
export type InitialStateAuthReducerType = typeof initialState