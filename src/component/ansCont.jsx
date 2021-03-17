import React, { Component } from 'react'
import Ans from './ans'
import '../assest/css/ansCont.css'

function shufer(arr) {
    let d = new Date()
    d =  ~~(d.getMilliseconds()/250)
    let temp = ''
    temp = arr[d]
    arr[d] = arr[3]
    arr[3] = temp
    return arr
}
export default class AnsCont extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let list = this.props.incorrect_answers || []
        list.push(this.props.correct_answer)
        list = shufer(list)
        
        return (
            <div className='ans-cont'>
                {
                    list.map((ans) => <Ans answer={ans} cra={this.props.correct_answer} handleClick={this.props.handleClick} />)
                }
            </div>
        )


    }
}


