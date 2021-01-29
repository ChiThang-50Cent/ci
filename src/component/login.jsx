import React from 'react'
import '../assest/css/Login.css'
import {LoginUltis} from '../ultis/ultis'

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(ev){
        const name = ev.target.name
        this.setState({
            [name] : ev.target.value
        })
    }
    handleSubmit(ev) {
        ev.preventDefault()
        LoginUltis(this.state)
        .then(id => {
            localStorage.setItem('uid', id)
            window.location.href = '/'
        })
        
    }
    render() {
        return (
            <div className='login'>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label><br />
                    <input type="text" name="userName" onChange={this.handleChange} required/><br />
                    <label>Password</label><br />
                    <input type="password" name="passWord" onChange={this.handleChange} required/><br />
                    <input type="submit" value="Log In" />
                </form>
                <p>Don't have account? <a href="/signup">Sign Up</a></p>
            </div>
        )
    }
}
