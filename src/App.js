import React from 'react'
import './App.css';
import { signUp, getInfo, signIn } from '../src/ultis/ultis.js';
import SignIn from './component/SignIn.jsx';
import SignUp from './component/SignUp';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this)
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this)
    this.click = this.click.bind(this)
  }
  handleChange(ev) {
    const value = ev.target.value;
    const name = ev.target.name;
    this.setState({
      [name]: value
    })
  }
  handleSubmitSignIn(ev) {
    ev.preventDefault();
    signIn(this.state.userName, this.state.passWord)
    .then(doc => console.log(doc))
  }
  handleSubmitSignUp(ev) {
    ev.preventDefault();
    if (this.state.passWord != this.state.rePassWord) {
      alert(`The pass doesn't match`)
    } else {
      signUp(this.state.userName, this.state.passWord)
        .then(docId => {
          console.log(docId)
        })
    }
  }
  click() {
    this.setState(state => {
      return {
        display: !state.display
      }
    }, console.log(this.state.display))
  }
  render() {
    return (
      <div className="App">
        <SignUp handleSubmit={this.handleSubmitSignUp} handleChange={this.handleChange} display={!this.state.display} />
        <SignIn handleSubmit={this.handleSubmitSignIn} handleChange={this.handleChange} display={this.state.display} />
        <a href="#" onClick={this.click}>Switch?</a>
      </div>
    );
  }
}

export default App;
