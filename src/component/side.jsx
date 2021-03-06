import React from 'react'
import MiniQuote from './miniQuote'
import '../assest/css/sideQuote.css'

export default function Side(props) {
    const style = {
        [props.style] : '0'
    }
    return (
        <div className='side-quote' style={style} >
            <MiniQuote />
        </div>
    )
}
