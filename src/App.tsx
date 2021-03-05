import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {StateType} from './state/state';

type AppPropsType = {
    state: StateType
    addPost: (postText: string) => void
    inputNewTextForPost: (newTextForPost: string) => void
}

export function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path='/profile' render={() => <Profile postsData={props.state.postsData}
                                                                    addPost={props.addPost}
                                                                    inputNewTextForPost={props.inputNewTextForPost}
                                                                    newTextForPost={props.state.newTextForPost}/>}
                />
                <Route exact path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogsData}/>}/>
            </div>
        </div>
    );
}
