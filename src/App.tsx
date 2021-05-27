import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from "./components/Login/Login";


export function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route exact path='/users' render={() => <UsersContainer/>}/>
                <Route exact path='/login' render={() => <Login/>}/>
            </div>
        </div>
    );
}
