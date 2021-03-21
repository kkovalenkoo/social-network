import {AllActions, PostDataType, ProfileDataType} from './state';

export const profileReducer = (state: ProfileDataType, action: AllActions) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostDataType = {id: 3, avatar: '', post: state.newTextForPost, like: 0};
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