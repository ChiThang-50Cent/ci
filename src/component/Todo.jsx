import React from 'react'

export default function Todo(props) {
    return (
        <div className='todo'>
            <h2>{props.tiltle}</h2>
            <p>{props.content}</p>
            <p>{props.time}</p>
            <p></p>
        </div>
    )
}
