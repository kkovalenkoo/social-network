import {getAuthUserData} from './authReducer'
import {AllStateType, AppActionsType} from './redux-store'
import {ThunkDispatch} from 'redux-thunk'

export type AppReducerAC = ReturnType<typeof initializedSuccess>

export type InitialStateAppReducerType = {
    initialized: boolean,
}

const initialState: InitialStateAppReducerType = {
    initialized: false,
}

export const appReducer = (state = initialState, action: AppReducerAC): InitialStateAppReducerType => {

    switch (action.type) {
        case 'INITIALIZED-SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

//Actions
const initializedSuccess = () => ({
    type: 'INITIALIZED-SUCCESS'
} as const)

//Thunk
export const initializeApp = () => (dispatch: ThunkDispatch<AllStateType, void, AppActionsType>) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}