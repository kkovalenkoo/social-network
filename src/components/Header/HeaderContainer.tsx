import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {logout} from '../../redux/authReducer'
import {AllStateType} from '../../redux/redux-store'

class HeaderContainer extends React.Component<mapStateAndDispatchPropsType> {

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout}/>
        )
    }
}

type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    logout: () => void
}
type mapStateAndDispatchPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AllStateType): mapStateToPropsType => ({
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, {logout})(HeaderContainer)

