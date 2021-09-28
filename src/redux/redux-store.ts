import {applyMiddleware, combineReducers, createStore} from 'redux'
import {profileReducer, ProfileReducerAC} from './profileReducer'
import {dialogsReducer, DialogsReducerAC} from './dialogsReducer'
import {usersReducer} from './usersReducer'
import {authReducer, AuthReducerAC} from './authReducer'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer, AppReducerAC} from './appReducer'

const rootReducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer,
    appReducer,
    form: formReducer
});

type RootReducersType = typeof rootReducers

export type AllStateType = ReturnType<RootReducersType>

export type AppActionsType = AuthReducerAC | ProfileReducerAC | DialogsReducerAC | AppReducerAC

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AllStateType, unknown, AppActionsType>

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));