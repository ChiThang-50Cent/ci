import React from 'react'
import '../assest/css/chatarea.css'
import UserInfo from './userInfo'
import { getMessage, sendMessage } from '../ultis/ultis.js'
import ChatBody from './ChatBody'
import { Link } from 'react-router-dom'

function getId(converObj, Id) {
    for (const numer in converObj) {
        if (converObj[numer].conversationId == Id) {
            return converObj[numer]
        }
    }
}

export default class Chatarea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chater: {},
            messages: []
        }
        this.sendMess = this.sendMess.bind(this)
    }
    componentDidUpdate(prevProps) {
        let path = window.location.pathname.split('/')
        if (path[2] !== undefined && path[2] !== '') {
            if (this.props !== prevProps) {
                let chater = getId(this.props, path[2])
                this.setState({
                    chater: chater
                }, () => {
                    getMessage(path[2], (mess) => {
                        this.setState({
                            messages: mess
                        })
                    })
                })
            }
        } else {
            if (this.props !== prevProps && this.props['0'] !== undefined) {
                this.setState({
                    chater: this.props['0']
                }, () => {
                    getMessage(this.props['0'].conversationId, (mess) => {
                        this.setState({
                            messages: mess
                        })
                    })
                })
            }
        }
        window.onhashchange = () => {
            let path = window.location.pathname.split('/')
            if (path[2] !== undefined && path[2] !== '') {
                if (Object.keys(this.props).length !== 0) {
                    let chater = getId(this.props, path[2])
                    this.setState({
                        chater: chater
                    }, () => {
                        getMessage(path[2], (mess) => {
                            this.setState({
                                messages: mess
                            })
                        })
                    })
                }
            }
        }
    }
    sendMess(ev) {
        let char = ev.which || ev.keyCode
        if (char == 13) {
            let sender = window.localStorage.getItem('uid')
            let cont = ev.target.value
            let conversationId = this.state.chater.conversationId
            sendMessage(conversationId, cont, sender)
            document.getElementsByName('mess')[0].value = ''
        }
    }
    render() {
        return (
            <div className='chat-area'>
                <div className='top-bar'>
                    <div className='chat-user-info'>
                        <UserInfo {...this.state.chater} />
                    </div>
                    <div className='function-icon'>
                        <ul className='icons'>
                            <li><Link to='#1'><i className="fa fa-phone" aria-hidden="true"></i></Link></li>
                            <li><Link to='#2'><i className="fa fa-video-camera" aria-hidden="true"></i></Link></li>
                            <li><Link to='#3'><i className="fa fa-search" aria-hidden="true"></i></Link></li>
                            <li><Link to='#4'><i className="fa fa-ellipsis-v" aria-hidden="true"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <ChatBody messages={this.state.messages} chater={this.state.chater} />
                <div className='mess-bar'>
                    <input type="text" name="mess" placeholder='Write sth' onKeyPress={this.sendMess} />
                </div>
            </div>
        )
    }
}