import {addMessageAC, InitialStateDialogsDataType, newMessageTextAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AllStateType} from '../../redux/redux-store';
import {InitialStateAuthReducerType} from '../../redux/authReducer';

type MapStateToPropsType = {
    state: InitialStateDialogsDataType
    auth: InitialStateAuthReducerType
}
type MapDispatchToPropsType = {
    changeTextMessage: (text: string) => void
    sendClick: () => void
}

export type MapStateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {
        state: state.dialogsReducer,
        auth: state.authReducer
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);