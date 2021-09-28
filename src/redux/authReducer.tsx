import {authAPI} from '../api/api'
import {Dispatch} from 'redux'
import {AppThunk} from './redux-store'
import {stopSubmit} from 'redux-form'

export type AuthReducerAC = ReturnType<typeof setAuthUserData>

export type InitialStateAuthReducerType = {
    isAuth: boolean,
    id: number | null,
    email: string | null,
    login: string | null
}

const initialState: InitialStateAuthReducerType = {
    id: null,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthReducerAC): InitialStateAuthReducerType => {

    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null,
                                login: string | null,
                                email: string | null,
                                isAuth: boolean) => ({
    type: 'SET-USER-DATA',
    payload: {id, login, email, isAuth}
} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.me().then(
        response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk =>
    async (dispatch: any) => {
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

