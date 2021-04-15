import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import { setAuthUserData} from '../../redux/authReducer';
import {AllStateType} from '../../redux/redux-store';

class HeaderContainer extends React.Component<mapStateAndDispatchPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(
            response => {
                if (response.data.resultCode === 0){
                    this.props.setAuthUserData(response.data.data.login)
                }
            });
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        );
    }
}

type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    setAuthUserData: (data: string | null) => void
}
type mapStateAndDispatchPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AllStateType): mapStateToPropsType => ({
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth
})

export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer)

