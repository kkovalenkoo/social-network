import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AllStateType} from '../redux/redux-store';
import {connect} from 'react-redux';
import {MapStateToPropsForRedirect} from '../components/Profile/ProfileContainer';

const mapStateToPropsForRedirect = (state: AllStateType): MapStateToPropsForRedirect => {
    return {
        auth: state.authReducer.isAuth
    };
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsForRedirect) {

        let {auth, ...restProps} = props

        if (!auth) return <Redirect to={'/login'}/>;
        return <Component {...restProps as T}/>;
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
};