export type ProfileReducerAC =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof inputNewTextForPostAC>
    | ReturnType<typeof setUserProfile>

export type InitialStateProfileReducerType = typeof initialState
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

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
    newText: '',
    profile: null as ProfileType | null
};

export const profileReducer = (state: InitialStateProfileReducerType = initialState, action: ProfileReducerAC): InitialStateProfileReducerType => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {id: 3, avatar: '', post: state.newText, like: 0};
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newText: ''
            };
        }
        case 'INPUT-NEW-TEXT-FOR-POST': {
            return {
                ...state,
                newText: action.newText
            };
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
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
export const setUserProfile = (profile: ProfileType | null) => ({
    type: 'SET-USER-PROFILE',
    profile
} as const)