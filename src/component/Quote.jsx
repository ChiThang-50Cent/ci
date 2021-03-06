import React from 'react'
import '../assest/css/Quote.css'
import UserInfo from './userInfo'
import { collectQuote, removeQuote } from '../ultis/ultis.js'

export default class Quote extends React.Component {
    constructor(props) {
        super(props)
        this.collect = this.collect.bind(this)
        this.remove = this.remove.bind(this)
    }
    collect() {
        let uid = localStorage.getItem('uid')
        const Quote = {
            '_id': this.props._id,
            'quoteAuthor': this.props.quoteAuthor,
            'quoteText': this.props.quoteText,
            'uid': uid,
            'postTime': this.props.user.postTime
        }
        collectQuote(Quote, uid)
        .then(data => console.log(data))
    }
    remove(){
        removeQuote(this.props._id)
        .then(()=>{
            window.location.reload()
        })
    }
    render() {
        let btn
        if (!window.location.pathname.includes('/profile')) {
            btn = <button onClick={this.collect}>Collect</button>
        } else {
            btn = <button onClick={this.remove}>Remove</button>
        }
        if (localStorage.getItem('uid') === null) {
            btn = ''
        }
        return (
            <div className='quote'>
                <UserInfo {...this.props.user} postTime={this.props.postTime} />
                <hr />
                <div className='quote-text'>
                    <h2>{this.props.quoteText}</h2>
                    <h5 style={{
                        alignSelf: 'flex-end',
                        marginRight: 20
                    }}><i>{this.props.quoteAuthor}</i></h5>
                </div>
                <hr />
                {btn}
            </div>
        )
    }
}
