import React from 'react'
import UserInfo from './userInfo'
import '../assest/css/sideChat.css'
import { } from '../ultis/ultis.js'

export default class SideChat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usersChat: []
        }
        this.select = this.select.bind(this)
    }
    UNSAFE_componentWillReceiveProps() {
        if (this.props.usersChat.length !== 0) {
            this.setState({
                usersChat: this.props.usersChat
            })
        }
    }
    select(index, converId) {
        let path = window.location.pathname.split('/')
        if (path[2] !== converId) {
            window.history.pushState('', '', `/chat/${converId}`)
            if (this.props.usersChat.length !== 0) {
                let items = [...this.props.usersChat]
                items = items.map((item, i) => {
                    if (i === index) {
                        return {
                            ...item,
                            isSelected: true
                        }
                    }
                    return {
                        ...item,
                        isSelected: false
                    }
                })
                this.setState({
                    usersChat: items
                })
            }
        }
    }

    render() {
        let listUsersInfo = this.state.usersChat
        if (listUsersInfo.length !== 0) {
            listUsersInfo = listUsersInfo.map((user, index) => {
                return <a href='#' key={user.uid} onClick={() => this.select(index, user.conversationId)}><UserInfo {...user} /></a>
            })
        } else {
            listUsersInfo = <h3>Have no conversation</h3>
        }
        return (
            <div className='side'>
                <div className='side-info'>
                    <UserInfo {...this.props.own} />
                </div>
                <div className='search-bar'>
                    <input type="text" name="searh-user" placeholder="Search" />
                </div>
                <div className='user-container'>
                    {listUsersInfo}
                </div>
            </div>
        )
    }
}
