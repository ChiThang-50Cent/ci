import React, { Component } from 'react'
import '../assest/css/chatbody.css'

export default class ChatBody extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let messages = this.props.messages || []
        if (messages.length !== 0) {
            messages = messages.map((mess, i) => {
                if (mess.send !== this.props.chater.id) {
                    return <div className='right' key={i}><span >{mess.cont}</span></div>
                } else {
                    return <div className='left' key={i} ><span >{mess.cont}</span></div>
                }
            })
        }
            return (
            <div className='chatting-body'>
                {messages}
            </div>
        )
    }
}
