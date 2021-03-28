import {combineReducers, createStore} from 'redux';
import {profileReducer, ProfileReducerAC} from './profileReducer';
import {dialogsReducer, DialogsReducerAC} from './dialogsReducer';

export type AllActionCreators = ProfileReducerAC | DialogsReducerAC

const rootReducers = combineReducers({
    profileReducer,
    dialogsReducer
})

type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType<RootReducersType>

export const store = createStore(rootReducers)