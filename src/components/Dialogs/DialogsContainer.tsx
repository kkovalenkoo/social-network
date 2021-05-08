import {addMessageAC, InitialStateDialogsDataType, newMessageTextAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AllStateType} from '../../redux/redux-store';
import {InitialStateAuthReducerType} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';
import React from 'react';
import {ProfileAPIComponent} from '../Profile/ProfileContainer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type MapStateToPropsType = {
    state: InitialStateDialogsDataType
}
type MapDispatchToPropsType = {
    changeTextMessage: (text: string) => void
    sendClick: () => void
}
export type MapStateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {
        state: state.dialogsReducer,
    };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeTextMessage: (text: string) => {
            dispatch(newMessageTextAC(text));
        },
        sendClick: () => {
            dispatch(addMessageAC());
        }
    };
};

const AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);