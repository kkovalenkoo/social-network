import style from './Users.module.css';
import userPhoto from '../../photos/userPhoto.png';
import React from 'react';
import {UserType} from '../../redux/usersReducer';

type UsersPropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: Array<UserType>
    onPageChange: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export function Users(props: UsersPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map((p, index) =>
                        <span key={index}
                              onClick={() => {
                                  props.onPageChange(p);
                              }}
                              className={props.currentPage === p ? style.selected : ''}>{p}
                            </span>)
                }
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small ? u.photos.small : u.photos.large ? u.photos.large : userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id);
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id);
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}