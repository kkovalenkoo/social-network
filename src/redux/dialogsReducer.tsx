export type DialogsReducerAC = ReturnType<typeof addMessageAC>

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
};

export const dialogsReducer = (state: InitialStateDialogsDataType = initialState, action: DialogsReducerAC): InitialStateDialogsDataType => {

    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: newMessage}]
            };
        }
        default:
            return state;
    }
};

export const addMessageAC = (newMessageText: string) => ({
    type: 'ADD-MESSAGE', newMessageText
} as const);
