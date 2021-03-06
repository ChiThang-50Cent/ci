import React, { Component } from 'react'
import UserInfo from './userInfo'
import '../assest/css/addQuote.css'
import { collectQuote } from '../ultis/ultis.js'

export default class AddQuote extends Component {
    constructor(props) {
        super(props)
        this.resize = this.resize.bind(this)
        this.addQuote = this.addQuote.bind(this)
    }
    resize() {
        let textarea = document.getElementById('textArea')
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + 2 + 'px'
    }
    addQuote() {
        const quoteText = document.getElementById('textArea').value
        let _id = Math.random().toString(36).substr(2, 9)
            + Math.random().toString(36).substr(2, 9)
            + Math.random().toString(36).substr(2, 6);
        let postTime = new Date().toDateString();
        if (quoteText !== '') {
            const quote = {
                'quoteText': quoteText,
                'quoteAuthor' : this.props.uid,
                'postTime' : postTime,
                '_id' : _id,
            }
            collectQuote(quote, this.props._id)
        }
        setTimeout(()=>{window.location.reload()}, 500)
    }
    render() {
        return (
            <div className='add-quote'>
                <UserInfo {...this.props} />
                <div className='text-area'>
                    <textarea placeholder='Write some quotes' id='textArea' onChange={this.resize}></textarea>
                </div>
                <div className='btn'>
                    <button id='post-btn' onClick={this.addQuote} >Post</button>
                </div>
            </div>
        )
    }
}
