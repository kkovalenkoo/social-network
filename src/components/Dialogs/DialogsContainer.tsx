import {addMessageAC, InitialStateDialogsDataType, newMessageTextAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';

type MapStateToPropsType = {
    state: InitialStateDialogsDataType
}
type MapDispatchToPropsType = {
    changeTextMessage: (text: string) => void
    sendClick: () => void
}

export type MapStateAndDispatchPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.dialogsReducer
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