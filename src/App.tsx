import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {AllActionCreators, AppStateType} from './redux/redux-store';

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
                <Route exact path='/profile' render={() => <Profile profileData={props.state.profileReducer}
                                                                    dispatch={props.dispatch}
                                                                    />}
                />
                <Route exact path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogsReducer}
                                                                    dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
}
