import React from 'react'
import './work_item.scss'

export const WorkItem = (props) => {
    return (
        <div className='work_item_container'>
            <div className='count_container'>{props.count < 10 ? `0${props.count}` : props.count}</div>
            <div className="heading">
                {props.title}
            </div>
            <div className="content">
                {props.content}
            </div>
        </div>
    )
}
