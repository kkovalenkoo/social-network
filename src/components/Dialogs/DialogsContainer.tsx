import {AllActionCreators} from '../../redux/redux-store';
import {addMessageAC, InitialStateDialogsDataType, newMessageTextAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';

type DialogsPropsType = {
    state: InitialStateDialogsDataType
    dispatch: (action: AllActionCreators) => void
}

export function DialogsContainer(props: DialogsPropsType) {

    const changeTextMessage = (text: string) => {
        props.dispatch(newMessageTextAC(text));
    };
    const sendClick = () => {
        props.dispatch(addMessageAC());
    };

    return <Dialogs state={props.state}
                    changeTextMessage={changeTextMessage}
                    sendClick={sendClick}

    />
}