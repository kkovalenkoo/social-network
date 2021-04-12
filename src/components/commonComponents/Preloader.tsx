import preloader from '../../loader/Spinner.svg';
import React from 'react';

export function Preloader() {
    return (
        <div>
            <img src={preloader}/>
        </div>
    )
}