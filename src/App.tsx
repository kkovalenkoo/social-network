import React from 'react'
import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Login from './components/Login/Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router'
import {initializeApp} from './redux/appReducer'
import {AllStateType} from './redux/redux-store'
import {Preloader} from './components/commonComponents/Preloader/Preloader'
import { Route } from 'react-router-dom'


class App extends React.Component<mapStateAndDispatchToProps> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route exact path="/users" render={() => <UsersContainer/>}/>
                    <Route exact path="/login" render={() => <Login/>}/>

                </div>
            </div>
        )
    }
}

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type mapStateAndDispatchToProps = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AllStateType): mapStateToPropsType => ({
    initialized: state.appReducer.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)


