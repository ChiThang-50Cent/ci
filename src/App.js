import './App.css';
import React from 'react'
import TodoItem from './component/TodoItem.jsx'
import works from './component/data.jsx'

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: works
      }
      this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id) {
      this.setState(prevState=>{
          const update = prevState.todos.map(todo=>{
              if(todo.id === id) {
                  todo.completed = !todo.completed
              }
              return todo
          })
          return {
              todos: update
          }
      })
  }
  
  render() {
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
      
      return (
          <div>
              {todoItems}
          </div>
      )    
  }
}

export default App
