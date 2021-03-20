import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {AllActions, StateType} from './state/state';

type AppPropsType = {
    state: StateType
    dispatch: (action: AllActions) => void
}

export function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path='/profile' render={() => <Profile postsData={props.state.postsData}
                                                                    dispatch={props.dispatch}
                                                                    newTextForPost={props.state.newTextForPost}/>}
                />
                <Route exact path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogsData}/>}/>
            </div>
        </div>
    );
}
