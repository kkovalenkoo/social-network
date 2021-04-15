import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import {} from '../../redux/authReducer';

type HeaderType = {
    login: string | null
    isAuth: boolean
}

export function Header(props: HeaderType) {

        return (
            <header className={s.header}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzxV0K3qxDgsnn7LxcALK59V99QMj_veKIw&usqp=CAU"
                    alt="logo"/>
                <div className={s.loginBlock}>

                    {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
                </div>
            </header>
    );
}

