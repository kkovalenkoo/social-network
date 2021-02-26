import React from 'react';
import s from './Header.module.css'

export function Header() {
    return (
            <header className={s.header}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzxV0K3qxDgsnn7LxcALK59V99QMj_veKIw&usqp=CAU"
                    alt="logo"/>
            </header>
    );
}

