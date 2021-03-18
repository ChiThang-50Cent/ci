import React, { Component } from 'react'
import '../assest/css/ans.css'

export default class Ans extends Component {
    constructor(props){
        super(props)
        this.changeColor = this.changeColor.bind(this)
    }
    changeColor(){
        if(this.props.answer !== this.props.cra){
            document.getElementById(this.props.answer).classList.add('red')
            this.props.handleClick(0)
        } else {
            document.getElementById(this.props.answer).classList.add('green')
            this.props.handleClick(10)
        }
        setTimeout(()=>{
            document.getElementById(this.props.answer).classList.remove('red')
            document.getElementById(this.props.answer).classList.remove('green')
            }, 700)
    }
    render() {
        return (
            <div className='ans' id={this.props.answer} onClick={this.changeColor} >
                <h3>{this.props.answer}</h3>
            </div>
        )
    }
}
