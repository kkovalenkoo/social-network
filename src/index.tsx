import React from 'react';
import './index.css';
import {store} from './state/state';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';

function rerenderEntireTree() {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 inputNewTextForPost={store.inputNewTextForPost.bind(store)}/>
        </BrowserRouter>
        , document.getElementById('root'));
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree)





