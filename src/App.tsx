import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Dialogs} from './components/Dialogs/Dialogs';
import { Profile } from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';

export function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={Profile}/>
                    <Route path='/dialogs' render={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
