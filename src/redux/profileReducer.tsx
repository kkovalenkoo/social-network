export type ProfileReducerAC = ReturnType<typeof addPostAC> |
    ReturnType<typeof inputNewTextForPostAC>

export type InitialStateProfileReducerType = typeof initialState

const initialState = {
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

export const profileReducer = (state: InitialStateProfileReducerType = initialState, action: ProfileReducerAC): InitialStateProfileReducerType => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: 3, avatar: '', post: state.newTextForPost, like: 0};
            state.postsData.push(newPost);
            state.newTextForPost = '';
            return state;
        case 'INPUT-NEW-TEXT-FOR-POST':
            state.newTextForPost = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostAC = () => ({
    type: 'ADD-POST'
} as const);
export const inputNewTextForPostAC = (newText: string) => ({
    type: 'INPUT-NEW-TEXT-FOR-POST',
    newText: newText
} as const);