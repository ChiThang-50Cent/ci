import React, { Component } from 'react'
import AnsCont from './component/ansCont'
import Quiz from './component/quiz'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listQuiz: [],
      stt: 0, 
      score : 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.reset = this.reset.bind(this)
  }
  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        this.setState({
          listQuiz: res.results
        })
      })
  }
  handleClick(score) {
    if (this.state.stt < this.state.listQuiz.length - 1) {
      setTimeout(() => {
        this.setState(prev => (
          {
            stt: prev.stt + 1,
            score : prev.score + score
          }
        ))
      }, 700)
    } else {
      if(this.state.stt == this.state.listQuiz.length-1){
        this.setState(prev => ({
          score : prev.score + score
        }))
      }
      document.getElementById('pop').style.display = 'block'
    }
  }
  reset(){
    window.location.reload()
  }
  render() {
    return (
      <div className='App'>
        <Quiz {...this.state.listQuiz[this.state.stt]} />
        <h4>Score: {this.state.score}/50</h4>
        <div id='pop'>
          <h3>End Game</h3>
          <h3><button onClick={this.reset}>Reset</button></h3>
        </div>
        <AnsCont {...this.state.listQuiz[this.state.stt]} handleClick={this.handleClick} />
      </div>
    )

  }
}
