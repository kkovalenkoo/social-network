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
export type AllActions = AddPostActionType | InputNewTextForPostActionType
type AddPostActionType = {
    type: 'ADD-POST'
}
type InputNewTextForPostActionType = {
    type: 'INPUT-NEW-TEXT-FOR-POST'
    newText: string
}
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
        if (action.type === 'ADD-POST'){
            const newPost: PostDataType = {id: 3, avatar: '', post: this._state.newTextForPost, like: 0};
            this._state.postsData.push(newPost);
            this._state.newTextForPost = '';
            this.rerenderEntireTree();
        }
        else if (action.type === 'INPUT-NEW-TEXT-FOR-POST'){
            this._state.newTextForPost = action.newText;
            this.rerenderEntireTree();
        }
    }
};