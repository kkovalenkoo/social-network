import React from 'react'
import {NavLink} from 'react-router-dom'
import userPhoto from '../../photos/userPhoto.png'
import {UserType} from '../../redux/usersReducer'

export const User: React.FC<UserPropsType> = props => {

    const {unfollow, follow, followingInProgress, user} = props

    return (
        <div>
                <span>
                    <NavLink to={`/profile/${user.id}`}>
                        <div>
                        <img src={user.photos.small ? user.photos.small : user.photos.large ? user.photos.large : userPhoto}
                             alt='user avatar'/>
                    </div>
                    </NavLink>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
        </div>
    )
}

//Type
type UserPropsType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: number[]
    user: UserType
}