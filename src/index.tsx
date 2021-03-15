import React from 'react';
import './index.css';
import {addPost, inputNewTextForPost, state, subscribe} from './state/state';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';

function rerenderEntireTree() {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} inputNewTextForPost={inputNewTextForPost}/>
        </BrowserRouter>
        , document.getElementById('root'));
}

rerenderEntireTree();

subscribe(rerenderEntireTree)





