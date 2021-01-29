import React from 'react'
import '../assest/css/Quote.css'

export default function Quote(props) {
    return (
        <div className='quote'>
            <div className='info'>
                <img src="logo192.png" alt="ava" />
                <div className='name-date'>
                    <h4>Chi Thang</h4>
                    <p>29/01/2021</p>
                </div>
            </div>
            <div className='quote-text'>
                <h2>{props.quoteText}</h2>
                <h5 style={{
                    alignSelf : 'flex-end',
                    marginRight : 20
                }}><i>{props.quoteAuthor}</i></h5>
            </div>
            <button>Collect</button>
        </div>
    )
}
