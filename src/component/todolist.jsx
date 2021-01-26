import React from 'react'
import Todo from './Todo'
import { getTodo } from '../ultis/ultis.js'
import { Info } from './info'

export class Todolist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoL: []
        }
    }
    componentDidMount() {
        let userId = localStorage.getItem('userId');
        getTodo(userId)
            .then(da =>
                this.setState({
                    todoL: da
                })
            )
    }
    render() {
        const todoL = this.state.todoL.map(temp => <Todo key={temp.id} {...temp} />)
        return (
            <div className='app'>
                <Info />
                <div className='todoList'>
                    {todoL}
                </div>
            </div>

        )
    }

}
