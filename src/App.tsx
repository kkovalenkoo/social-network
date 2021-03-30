import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {AllActionCreators, AppStateType} from './redux/redux-store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    state: AppStateType
    dispatch: (action: AllActionCreators) => void
}

export function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path='/profile' render={() => <Profile state={props.state.profileReducer}
                                                                    dispatch={props.dispatch}
                />}
                />
                <Route exact path='/dialogs' render={() => <DialogsContainer state={props.state.dialogsReducer}
                                                                             dispatch={props.dispatch}
                />}/>
            </div>
        </div>
    );
}
