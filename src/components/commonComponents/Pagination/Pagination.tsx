import style from './Pagination.module.css'
import React, {useState} from 'react'
import cn from 'classnames'

export const Pagination: React.FC<PaginationPropsType> = (props, {portionSize = 10}) => {

    const {onPageChange, totalItemsCount, currentPage, pageSize} = props

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPAgeNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPAgeNumber = portionNumber * portionSize

    return (
        <div className={style.paginator}>

            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPAgeNumber && p <= rightPortionPAgeNumber)
                .map((p) => {
                    return <span className={cn({[style.selectedPage]: currentPage === p}, style.pageNumber)}
                                 key={p}
                                 onClick={() => {onPageChange(p)}}>{p}</span>})}

            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}

        </div>
    )
}

//Type
type PaginationPropsType = {
    onPageChange: (pageNumber: number) => void
    totalItemsCount: number
    currentPage: number
    pageSize: number
}