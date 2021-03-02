import React from 'react'
import User from './User'
import '../assest/css/side.css'
import { getConversations } from '../ultis/ultis.js'

export default class Side extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    render() {
        getConversations('EvxxRUUVhdncoRZollQb')
        return (
            <div className='side'>
                <div className='side-info'>
                    <img src="logo192.png" alt="ava" />
                    <h2 className='side-name'>Thắng</h2>
                </div>
                <div className='search-bar'>
                    <input type="text" name="searh-user" placeholder="Search" />
                </div>
                <div className='user-container'>
                    {1}
                </div>
            </div>
        )
    }
}
