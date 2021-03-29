import Chatarea from './Chatarea.jsx'
import '../assest/css/ChatApp.css'
import SideChat from './SideChat.jsx'
import React, { Component } from 'react'
import { getUserInfo, getChatSide } from '../ultis/ultis.js'

export default class Chat extends Component {
    constructor() {
        super()
        this.state = {
            own: '',
            usersChat : []
        }
    }
    componentDidMount() {
        let own = localStorage.getItem('uid')
        if (own !== null) {
            getChatSide(own)
                .then(data => {
                    return data.map((user, index) => {
                        if (index == 0) {
                            return {
                                ...user,
                                isSelected: true
                            }
                        }
                        return {
                            ...user,
                            isSelected: false
                        }
                    })
                })
                .then(data => {
                    this.setState({
                        usersChat: data
                    }, () => {
                        getUserInfo(own)
                            .then(res => {
                                this.setState({
                                    own: res
                                })
                            })
                    })
                })

        }
    }
    render() {
        return (
            <div className='chat-app'>
                <SideChat {...this.state} />
                <Chatarea {...this.state.usersChat}/>
            </div>
        )
    }
}

