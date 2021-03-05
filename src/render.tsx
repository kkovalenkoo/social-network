import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addPost, inputNewTextForPost, state, StateType} from './state/state';
import {BrowserRouter} from 'react-router-dom';

export function rerenderEntireTree(state: StateType) {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} inputNewTextForPost={inputNewTextForPost}/>
        </BrowserRouter>
        , document.getElementById('root'));
}




