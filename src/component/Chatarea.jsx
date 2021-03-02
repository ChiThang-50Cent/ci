import React from 'react'
import '../assest/css/chatarea.css'
import User from './User'


export default function Chatarea() {
    return (
        <div className='chat-area'>
            <div className='top-bar'>
                <div className='chat-user-info'>
                    <User />
                </div>
                <div className='function-icon'>
                    <ul className='icons'>
                        <li><a href='#1'><i className="fa fa-phone" aria-hidden="true"></i></a></li>
                        <li><a href='#2'><i className="fa fa-video-camera" aria-hidden="true"></i></a></li>
                        <li><a href='#3'><i className="fa fa-search" aria-hidden="true"></i></a></li>
                        <li><a href='#4'><i className="fa fa-ellipsis-v" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className='chatting-body'>
                <p className='left'><span >Mhu Mhu</span></p>
                <p className='right'><span>Mhi Mhi</span></p>
            </div>
            <div className='mess-bar'>
                <input type="text" name="mess" placeholder='Write sth'/>
            </div>
        </div>
    )
}
