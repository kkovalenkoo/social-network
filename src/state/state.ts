import {rerenderEntireTree} from '../render';

export type UserType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsDataType = {
    users: Array<UserType>
    messages: Array<MessagesType>
}
export type PostDataType = {
    id: number
    avatar: string
    post: string
    like: number
}
export type StateType = {
    dialogsData: DialogsDataType
    postsData: Array<PostDataType>
    newTextForPost: string
}

export const state: StateType = {
    dialogsData: {
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
    },
    postsData: [
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
    ],
    newTextForPost: ''
};

export function addPost(postText: string) {
    const newPost: PostDataType = {id: 3, avatar: '', post: postText, like: 0};
    state.postsData.push(newPost);
    rerenderEntireTree(state);
    state.newTextForPost = '';
}

export function inputNewTextForPost(newTextForPost: string) {
    state.newTextForPost = newTextForPost;
    rerenderEntireTree(state);
}
