import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';

export type UserType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    users: Array<UserType>
    messages: Array<MessagesType>
}
export type postDataType = {
    id: number
    avatar: string
    post: string
    like: number
}

const dialogsData: DialogsType = {
    users: [
        {id: 1, name: 'Yury'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Sasha'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Yo'}
    ]
}
const postsData: Array<postDataType> = [
    {
        id: 1,
        avatar: 'https://ss.sport-express.ru/userfiles/materials/156/1564657/large.jpg',
        post: `It's my first post`,
        like: 10
    },
    {
        id: 2,
        avatar: `https://ss.sport-express.ru/userfiles/materials/156/1564657/large.jpg`,
        post: 'Hello, how are you',
        like: 5
    }
];



ReactDOM.render(<App dialogsData={dialogsData} postsData={postsData}/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
