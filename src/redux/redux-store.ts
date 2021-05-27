import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer, ProfileReducerAC} from './profileReducer';
import {dialogsReducer, DialogsReducerAC} from './dialogsReducer';
import {usersReducer} from './usersReducer';
import {authReducer, AuthReducerAC, setAuthUserData} from './authReducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

const rootReducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer,
    form: formReducer
});

type RootReducersType = typeof rootReducers

export type AllStateType = ReturnType<RootReducersType>

export type AppActionsType = AuthReducerAC | ProfileReducerAC | DialogsReducerAC

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AllStateType, unknown, AppActionsType>

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));