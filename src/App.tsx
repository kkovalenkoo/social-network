import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Profile} from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsType, postDataType} from './index';

type AppPropsType = {
    dialogsData: DialogsType
    postsData: Array<postDataType>
}

export function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={() => <Profile postsData={props.postsData}/>}/>
                    <Route exact path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
