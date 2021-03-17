import React, { Component } from 'react'
import '../assest/css/quiz.css'

export default class Quiz extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className ='quiz'>
                <h4>{this.props.question}</h4>
            </div>
        )
    }
}
