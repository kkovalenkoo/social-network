import {combineReducers, createStore} from 'redux';
import {profileReducer, ProfileReducerAC} from './profileReducer';
import {dialogsReducer, DialogsReducerAC} from './dialogsReducer';
import {usersReducer} from './usersReducer';

const rootReducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer
});

type RootReducersType = typeof rootReducers
export type AllStateType = ReturnType<RootReducersType>

export const store = createStore(rootReducers);