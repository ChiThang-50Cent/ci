import React from 'react'
import './App.css';
import SignIn from './component/SignIn.jsx';
import SignUp from './component/SignUp';
import { Todolist } from './component/todolist';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userId : null
    }
  }
  render(){
    // window.location.href = "/"
    const Router = {
      "/": <Todolist />,
      "/signin": <SignIn />,
      "/signUp" : <SignUp /> 
    }
    return(
      <div className='app'>
        {Router[window.location.pathname]}
      </div>
    )
  }
  
}

export default App;
