import React from 'react'

export function Head() {
    return (
        <div className='head'>
            <ul className='menu'>
                <li><h2>Skote</h2></li>
                <li><a href="/newQuote">New Quote</a></li>
                <li><a href="/favourQuote">Favour Quote</a></li>
                <li><a href="/login" >Log In</a></li>
            </ul>
        </div>
    )
}
