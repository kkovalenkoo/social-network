import style from './Pagination.module.css'
import React from 'react'

export const Pagination: React.FC<PaginationPropsType> = ({onPageChange, totalUsersCount, currentPage, pageSize}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p, index) =>
                <span key={index}
                      onClick={() => {
                          onPageChange(p)
                      }}
                      className={currentPage === p ? style.selected : ''}>{p}
                            </span>)}
        </div>
    )
}

//Type
type PaginationPropsType = {
    onPageChange: (pageNumber: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
}