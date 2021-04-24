import style from './Users.module.css';
import userPhoto from '../../photos/userPhoto.png';
import React from 'react';
import {UserType} from '../../redux/usersReducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UsersPropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: Array<UserType>
    onPageChange: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: (id: number, value: boolean) => void
    followingInProgress: number[]
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
                    <NavLink to={`/profile/${u.id}`}>
                        <div>
                        <img src={u.photos.small ? u.photos.small : u.photos.large ? u.photos.large : userPhoto}/>
                    </div>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(u.id, true);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '8984ca38-6e26-4fb2-a385-4373d690c5de'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                        props.toggleFollowingProgress(u.id, false);
                                    });
                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(u.id, true);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '8984ca38-6e26-4fb2-a385-4373d690c5de'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                        props.toggleFollowingProgress(u.id, false);
                                    });

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