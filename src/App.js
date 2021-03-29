import './App.css';
import { Head } from './component/head';
import { } from './ultis/ultis'
import Side from './component/side'
import Main from './component/main'
import Login from './component/login'
import Signup from './component/SignUp';
import Profile from './component/Profile.jsx'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Chat from './component/Chat';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: []
    }
  }
  componentDidMount() {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
      .then(res => res.json())
      .then(data => {
        this.setState({
          quotes: data.data
        })
      })
  }
  render() {
    return (
      <React.StrictMode>
        <Router >
          <div className="App">
            <Switch>
              <Route exact path='/'>
                <>
                  <Head />
                  <div className='body'>
                    <Side style='left' />
                    <div className='cont'>
                      <Main quotes={this.state.quotes} />
                    </div>
                    <Side style='right' />
                  </div>
                </>
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/signup'>
                <Signup />
              </Route>
              <Route path='/profile'>
                <>
                  <Head />
                  <div className='body'>
                    <Side style='left' />
                    <div className='cont'>
                      <Profile />
                    </div>
                    <Side style='right' />
                  </div>
                </>
              </Route>
              <Route path='/chat'>
                <Chat />
              </Route>
            </Switch>
          </div>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;
