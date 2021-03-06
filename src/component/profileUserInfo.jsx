import React from 'react'
import  '../assest/css/profileUserInfo.css'

export default function ProfileUserInfo(props) {
    return (
        <div className='profileUserInfo'>
            
            <div className='profileAva'>
                <img src={props.url} alt={`${props.uid} ava`} />
            </div>
            <div className='profileCover'>
                <img src={props.cover} alt={`${props.uid} cover`} />
            </div>
            <div className='profileUserName'>
                <h3 >{props.uid}</h3>
            </div>
        </div>
    )
}
