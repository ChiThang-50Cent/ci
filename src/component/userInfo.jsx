import React from 'react'
import '../assest/css/UserInfo.css'

export default function UserInfo(props) {
    return (
        <div className='info' style={props.style}>
            <img src={props.url} alt={`${props.uid} ava`} />
            <div className='name-date'>
                <h4>{props.uid}</h4>
                <p>{props.postTime}</p>
            </div>
        </div>
    )
}
