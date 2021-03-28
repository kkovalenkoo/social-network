import React from 'react';
import './index.css';
import {store} from './redux/redux-store';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';

function rerenderEntireTree() {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
        , document.getElementById('root'));
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree);





