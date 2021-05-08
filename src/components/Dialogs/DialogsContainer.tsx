import {addMessageAC, InitialStateDialogsDataType, newMessageTextAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {AllStateType} from '../../redux/redux-store';
import React from 'react';
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);