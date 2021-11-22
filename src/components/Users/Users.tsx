import React from 'react'
import {UserType} from '../../redux/usersReducer'
import {Pagination} from '../commonComponents/Pagination/Pagination'
import {User} from './User'

export const Users: React.FC<UsersPropsType> = props => {

    const {
        followingInProgress,
        totalUsersCount,
        onPageChange,
        currentPage,
        unfollow,
        pageSize,
        follow,
        users
    } = props

    return (
        <div>
            <Pagination totalUsersCount={totalUsersCount}
                        onPageChange={onPageChange}
                        currentPage={currentPage}
                        pageSize={pageSize}/>

            {users.map(u => <User followingInProgress={followingInProgress}
                                  unfollow={unfollow}
                                  follow={follow}
                                  key={u.id}
                                  user={u}/>)}
        </div>
    )
}

//Type
type UsersPropsType = {
    onPageChange: (pageNumber: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: number[]
    totalUsersCount: number
    users: Array<UserType>
    currentPage: number
    pageSize: number
}