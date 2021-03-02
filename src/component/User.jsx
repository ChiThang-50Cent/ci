import React from 'react'
import '../assest/css/user.css'

export default function User(props) {
    return (
        <div className='user'>
            <div className='image'>
                <img src={props.avatar} alt={`ava ${props.name}`} />
            </div>
            <div className='info'>
                <h3 className='user-name'>{props.name}</h3>
                <p className='time'>12h ago</p>
            </div>
        </div>
    )
}
