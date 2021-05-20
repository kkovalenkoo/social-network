import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './authReducer';
import thunkMiddleware from 'redux-thunk'
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

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));