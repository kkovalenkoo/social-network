import {AllActions, DialogsDataType} from './state';

export const dialogsReducer = (state: DialogsDataType, action: AllActions) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 4, message: newMessage});
            return state;
        case 'NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage;
            return state;
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