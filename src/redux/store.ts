import {} from './profileReducer';
//import {addMessageAC, dialogsReducer, newMessageTextAC} from './dialogsReducer';

/*
type UserType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
export type DialogsDataType = {
    users: Array<UserType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type ProfileDataType = {
    postsData: Array<PostDataType>,
    newTextForPost: string
}
export type PostDataType = {
    id: number
    avatar: string
    post: string
    like: number
}
export type StateType = {
    dialogsData: DialogsDataType
    profileData: ProfileDataType
}
export type AllActions =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof inputNewTextForPostAC> |
    ReturnType<typeof newMessageTextAC> |
    ReturnType<typeof addMessageAC>
export type StoreType = {
    _state: StateType
    getState: () => StateType
    rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: AllActions) => void
}

export const store: StoreType = {
    _state: {
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
            ],
            newMessageText: ''
        },
        profileData:
        {
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
        }

    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profileData = profileReducer(this._state.profileData, action);
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);
        this.rerenderEntireTree();
    }
};*/
