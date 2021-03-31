export type DialogsReducerAC = ReturnType<typeof newMessageTextAC> |
    ReturnType<typeof addMessageAC>

export type InitialStateDialogsDataType = typeof initialState

const initialState = {
    messageAuthor: [
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
};

export const dialogsReducer = (state: InitialStateDialogsDataType = initialState, action: DialogsReducerAC): InitialStateDialogsDataType => {

    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, message: newMessage}]
            };
        }
        case 'NEW-MESSAGE-TEXT': {
            return {
                ...state,
                newMessageText: action.newMessage
            };
        }
        default:
            return state;
    }
};

export const addMessageAC = () => ({
    type: 'ADD-MESSAGE'
} as const);
export const newMessageTextAC = (newMessage: string) => ({
    type: 'NEW-MESSAGE-TEXT',
    newMessage: newMessage
} as const);